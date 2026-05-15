'use client'

import { Navbar } from '@/components/navbar'
import { ListingForm } from '@/components/listing-form'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ArrowLeft, CheckCircle } from 'lucide-react'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'
import { useAuth } from '@/contexts/auth-context'
import { actionCreateListing, actionUploadListingImage } from '@/actions'
import type { CreateListingInput } from '@/types'

export default function CreateListingPage() {
  const { user, loading } = useAuth()
  const router = useRouter()
  const [isSuccess, setIsSuccess] = useState(false)
  const [newListingId, setNewListingId] = useState<string | null>(null)

  useEffect(() => {
    if (!loading && !user) {
      toast.error('Please sign in to post a service.')
      router.push('/auth/login')
    }
  }, [user, loading, router])

  const handleSubmit = async (
    formData: CreateListingInput & { imageFile?: File | null }
  ) => {
    if (!user) {
      toast.error('Please sign in.')
      return
    }

    let imageUrl: string | undefined
    const { imageFile, ...fields } = formData

    if (imageFile) {
      const fd = new FormData()
      fd.append('file', imageFile)
      const uploadResult = await actionUploadListingImage(fd)

      if (uploadResult.success) {
        imageUrl = uploadResult.data.url
      } else {
        toast.error(`Image upload failed: ${uploadResult.error}`)
      }
    }

    const result = await actionCreateListing({ ...fields, imageUrl })

    if (!result.success) {
      toast.error(result.error)
      return
    }

    setNewListingId(result.data.id)
    setIsSuccess(true)
    toast.success('Service published successfully!')
  }

  if (isSuccess) {
    return (
      <main className="min-h-screen bg-background">
        <Navbar />
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent/20 text-accent mx-auto">
              <CheckCircle className="h-8 w-8" />
            </div>
            <div className="space-y-2">
              <h1 className="text-3xl font-bold text-foreground">Service Published!</h1>
              <p className="text-lg text-muted-foreground">
                Your service is now live and visible to all students on UniGig.
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-card p-6 space-y-4 text-left">
              <h3 className="font-bold text-foreground">What&apos;s next?</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex gap-2">
                  <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                  <span>Students will start requesting your service</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                  <span>You&apos;ll receive notifications for new requests</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                  <span>Build your reputation with positive reviews</span>
                </li>
              </ul>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              {newListingId && (
                <Link href={`/listing/${newListingId}`} className="flex-1">
                  <Button className="w-full h-12 bg-accent hover:bg-accent/90 text-accent-foreground">
                    View My Listing
                  </Button>
                </Link>
              )}
              <Link href="/marketplace" className="flex-1">
                <Button className="w-full h-12 bg-primary hover:bg-secondary">
                  Browse Marketplace
                </Button>
              </Link>
              {user && (
                <Link href={`/profile/${user.id}`} className="flex-1">
                  <Button variant="outline" className="w-full h-12 border-border">
                    View My Profile
                  </Button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6 lg:px-8">
        <Link href="/marketplace">
          <Button variant="ghost" className="mb-8 gap-2 text-muted-foreground hover:text-foreground">
            <ArrowLeft className="h-4 w-4" />
            Back to Marketplace
          </Button>
        </Link>

        <div className="mb-12 space-y-2">
          <h1 className="text-4xl font-bold text-foreground">Post a Service</h1>
          <p className="text-lg text-muted-foreground">
            Share your skills and start earning today. Provide as much detail as possible.
          </p>
        </div>

        <div className="rounded-2xl border border-border bg-card p-8 mb-12">
          <ListingForm onSubmit={handleSubmit} />
        </div>

        <div className="rounded-2xl border border-border bg-card/50 p-8 space-y-6">
          <h2 className="text-2xl font-bold text-foreground">Tips for Success</h2>
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="space-y-2">
              <h3 className="font-bold text-foreground">Write a compelling title</h3>
              <p className="text-sm text-muted-foreground">
                Use keywords that students search for. Be specific about what you offer.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-bold text-foreground">Price competitively</h3>
              <p className="text-sm text-muted-foreground">
                Check similar services to ensure your pricing is fair and attractive.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-bold text-foreground">Add a great description</h3>
              <p className="text-sm text-muted-foreground">
                Highlight what makes your service unique and what students will get.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-bold text-foreground">Use a professional image</h3>
              <p className="text-sm text-muted-foreground">
                A clear, relevant image can increase interest in your service.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
