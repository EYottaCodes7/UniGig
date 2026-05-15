'use server'

import { createClient } from '@/lib/supabase/server'
import type { CreateListingInput } from '@/types/listing'

type ActionResult<T> = { success: true; data: T } | { success: false; error: string }

export async function actionUploadListingImage(
  formData: FormData
): Promise<ActionResult<{ url: string }>> {
  const file = formData.get('file')
  if (!file || !(file instanceof File) || file.size === 0) {
    return { success: false, error: 'No file provided' }
  }

  const supabase = await createClient()
  const {
    data: { user },
    error: userErr,
  } = await supabase.auth.getUser()
  if (userErr || !user) {
    return { success: false, error: 'You must be signed in to upload' }
  }

  const ext = file.name.includes('.') ? file.name.split('.').pop() : 'jpg'
  const path = `${user.id}/${crypto.randomUUID()}.${ext}`

  const buffer = Buffer.from(await file.arrayBuffer())

  const { error: uploadError } = await supabase.storage
    .from('listing-images')
    .upload(path, buffer, {
      contentType: file.type || 'image/jpeg',
      upsert: false,
    })

  if (uploadError) {
    return { success: false, error: uploadError.message }
  }

  const { data: pub } = supabase.storage.from('listing-images').getPublicUrl(path)
  return { success: true, data: { url: pub.publicUrl } }
}

export async function actionCreateListing(
  input: CreateListingInput & { imageUrl?: string }
): Promise<ActionResult<{ id: string }>> {
  const supabase = await createClient()
  const {
    data: { user },
    error: userErr,
  } = await supabase.auth.getUser()
  if (userErr || !user) {
    return { success: false, error: 'You must be signed in' }
  }

  const price =
    typeof input.price === 'string' ? parseFloat(input.price) : Number(input.price)
  if (Number.isNaN(price) || price < 0) {
    return { success: false, error: 'Invalid price' }
  }

  const { data, error } = await supabase
    .from('listings')
    .insert({
      user_id: user.id,
      title: input.title.trim(),
      category: input.category,
      description: input.description.trim(),
      price,
      tags: input.tags?.trim() || null,
      contact_methods: JSON.stringify(input.contactMethods ?? []),
      image_url: input.imageUrl ?? null,
    })
    .select('id')
    .single()

  if (error) {
    return { success: false, error: error.message }
  }

  return { success: true, data: { id: data.id as string } }
}
