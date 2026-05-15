'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Upload, X } from 'lucide-react';

const CATEGORIES = [
  'Tech Repairs',
  'Academic',
  'Delivery',
  'Second-hand',
  'Design',
  'Events',
  'Other',
];

interface ListingFormProps {
  onSubmit?: (formData: any) => void;
}

export function ListingForm({ onSubmit }: ListingFormProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    description: '',
    price: '',
    tags: '' as string,
    contactMethods: [] as string[],
  });
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, category: value }));
  };

  const handleContactMethodChange = (method: string, checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      contactMethods: checked
        ? [...prev.contactMethods, method]
        : prev.contactMethods.filter((m) => m !== method),
    }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const removeImage = () => {
    setImageFile(null);
    setImagePreview(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      setTimeout(() => {
        onSubmit?.(formData);
        setIsLoading(false);
      }, 1000);
    } catch (error) {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Title */}
      <div className="space-y-2">
        <Label htmlFor="title" className="text-base font-semibold">
          Service Title
        </Label>
        <Input
          id="title"
          name="title"
          placeholder="What service are you offering?"
          value={formData.title}
          onChange={handleInputChange}
          className="h-12"
          required
        />
        <p className="text-xs text-muted-foreground">
          Be specific and clear about what you&apos;re offering
        </p>
      </div>

      {/* Category */}
      <div className="space-y-2">
        <Label htmlFor="category" className="text-base font-semibold">
          Category
        </Label>
        <Select value={formData.category} onValueChange={handleSelectChange}>
          <SelectTrigger className="h-12">
            <SelectValue placeholder="Select a category" />
          </SelectTrigger>
          <SelectContent>
            {CATEGORIES.map((category) => (
              <SelectItem key={category} value={category}>
                {category}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Description */}
      <div className="space-y-2">
        <Label htmlFor="description" className="text-base font-semibold">
          Description
        </Label>
        <Textarea
          id="description"
          name="description"
          placeholder="Describe your service in detail. What will you provide? What are the benefits?"
          value={formData.description}
          onChange={handleInputChange}
          rows={6}
          className="resize-none"
          required
        />
        <p className="text-xs text-muted-foreground">
          {formData.description.length}/500 characters
        </p>
      </div>

      {/* Price */}
      <div className="space-y-2">
        <Label htmlFor="price" className="text-base font-semibold">
          Price per session/item
        </Label>
        <div className="flex items-center gap-2">
          <span className="text-lg font-semibold text-foreground">$</span>
          <Input
            id="price"
            name="price"
            type="number"
            placeholder="25"
            value={formData.price}
            onChange={handleInputChange}
            min="0"
            step="0.01"
            className="h-12"
            required
          />
        </div>
      </div>

      {/* Image Upload */}
      <div className="space-y-2">
        <Label className="text-base font-semibold">Service Image (Optional)</Label>
        {!imagePreview ? (
          <label className="flex cursor-pointer items-center justify-center rounded-xl border-2 border-dashed border-border bg-card/50 p-8 hover:border-primary/50 transition-colors">
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="hidden"
            />
            <div className="text-center space-y-2">
              <Upload className="h-8 w-8 mx-auto text-muted-foreground" />
              <div className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">Click to upload</span> or drag and drop
              </div>
              <p className="text-xs text-muted-foreground">PNG, JPG, GIF up to 10MB</p>
            </div>
          </label>
        ) : (
          <div className="space-y-2">
            <div className="relative h-48 w-full rounded-xl overflow-hidden">
              <img src={imagePreview} alt="Preview" className="h-full w-full object-cover" />
              <button
                type="button"
                onClick={removeImage}
                className="absolute top-2 right-2 p-1 bg-destructive text-destructive-foreground rounded-lg hover:bg-destructive/90 transition-colors"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            <label className="flex cursor-pointer items-center justify-center rounded-lg border border-border p-4 hover:border-primary/50 transition-colors">
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="hidden"
              />
              <span className="text-sm text-muted-foreground">
                Click to change image
              </span>
            </label>
          </div>
        )}
      </div>

      {/* Tags */}
      <div className="space-y-2">
        <Label htmlFor="tags" className="text-base font-semibold">
          Skills/Tags (comma-separated)
        </Label>
        <Input
          id="tags"
          name="tags"
          placeholder="e.g., React, JavaScript, Web Development"
          value={formData.tags}
          onChange={handleInputChange}
          className="h-12"
        />
      </div>

      {/* Contact Methods */}
      <div className="space-y-4">
        <Label className="text-base font-semibold">Preferred Contact Methods</Label>
        <div className="space-y-3">
          {['Phone', 'Email', 'Message', 'Discord'].map((method) => (
            <label key={method} className="flex items-center gap-3 cursor-pointer">
              <Checkbox
                checked={formData.contactMethods.includes(method)}
                onCheckedChange={(checked) =>
                  handleContactMethodChange(method, !!checked)
                }
              />
              <span className="text-foreground font-medium">{method}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Submit Button */}
      <div className="flex gap-3 pt-4 border-t border-border">
        <Button
          type="submit"
          disabled={isLoading}
          className="flex-1 h-12 bg-primary hover:bg-secondary text-base font-semibold gap-2"
        >
          {isLoading ? (
            <>
              <div className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
              Publishing...
            </>
          ) : (
            'Publish Service'
          )}
        </Button>
        <Button
          type="button"
          variant="outline"
          className="flex-1 h-12 border-border text-base font-semibold"
        >
          Save as Draft
        </Button>
      </div>
    </form>
  );
}
