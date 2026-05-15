'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import Link from 'next/link';
import { Mail, Lock, User, Eye, EyeOff } from 'lucide-react';

interface AuthFormProps {
  type: 'login' | 'signup';
  onSubmit?: (formData: any) => void;
}

export function AuthForm({ type, onSubmit }: AuthFormProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreeToTerms: false,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, type: inputType, checked, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: inputType === 'checkbox' ? checked : value,
    }));
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
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Name Field (Signup only) */}
      {type === 'signup' && (
        <div className="space-y-2">
          <Label htmlFor="name" className="font-medium">
            Full Name
          </Label>
          <div className="relative">
            <User className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
            <Input
              id="name"
              name="name"
              type="text"
              placeholder="John Doe"
              value={formData.name}
              onChange={handleInputChange}
              className="pl-10 h-12 border-border focus:border-primary focus:ring-primary/50"
              required
            />
          </div>
        </div>
      )}

      {/* Email Field */}
      <div className="space-y-2">
        <Label htmlFor="email" className="font-medium">
          Email Address
        </Label>
        <div className="relative">
          <Mail className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="you@university.edu"
            value={formData.email}
            onChange={handleInputChange}
            className="pl-10 h-12 border-border focus:border-primary focus:ring-primary/50"
            required
          />
        </div>
      </div>

      {/* Password Field */}
      <div className="space-y-2">
        <Label htmlFor="password" className="font-medium">
          Password
        </Label>
        <div className="relative">
          <Lock className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
          <Input
            id="password"
            name="password"
            type={showPassword ? 'text' : 'password'}
            placeholder="••••••••"
            value={formData.password}
            onChange={handleInputChange}
            className="pl-10 pr-10 h-12 border-border focus:border-primary focus:ring-primary/50"
            required
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
          >
            {showPassword ? (
              <EyeOff className="h-5 w-5" />
            ) : (
              <Eye className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {/* Confirm Password Field (Signup only) */}
      {type === 'signup' && (
        <div className="space-y-2">
          <Label htmlFor="confirmPassword" className="font-medium">
            Confirm Password
          </Label>
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
            <Input
              id="confirmPassword"
              name="confirmPassword"
              type={showPassword ? 'text' : 'password'}
              placeholder="••••••••"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              className="pl-10 pr-10 h-12 border-border focus:border-primary focus:ring-primary/50"
              required={type === 'signup'}
            />
          </div>
        </div>
      )}

      {/* Remember Me or Terms */}
      <div className="flex items-center gap-2">
        <Checkbox
          id="agree"
          name={type === 'login' ? 'rememberMe' : 'agreeToTerms'}
          checked={type === 'login' ? false : formData.agreeToTerms}
          onCheckedChange={(checked) =>
            setFormData((prev) => ({
              ...prev,
              agreeToTerms: type === 'signup' ? !!checked : prev.agreeToTerms,
            }))
          }
        />
        <Label htmlFor="agree" className="cursor-pointer text-sm text-muted-foreground">
          {type === 'login' ? (
            'Remember me'
          ) : (
            <>
              I agree to the{' '}
              <Link href="#" className="text-primary hover:underline">
                Terms of Service
              </Link>
              {' '}and{' '}
              <Link href="#" className="text-primary hover:underline">
                Privacy Policy
              </Link>
            </>
          )}
        </Label>
      </div>

      {/* Submit Button */}
      <Button
        type="submit"
        disabled={isLoading || (type === 'signup' && !formData.agreeToTerms)}
        className="w-full h-12 bg-primary hover:bg-primary/90 text-primary-foreground text-base font-semibold gap-2"
      >
        {isLoading ? (
          <>
            <div className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
            {type === 'login' ? 'Signing in...' : 'Creating account...'}
          </>
        ) : type === 'login' ? (
          'Sign In'
        ) : (
          'Create Account'
        )}
      </Button>

      {/* Forgot Password (Login only) */}
      {type === 'login' && (
        <div className="text-center">
          <Link
            href="#"
            className="text-sm text-primary hover:underline"
          >
            Forgot your password?
          </Link>
        </div>
      )}

      {/* Auth Link */}
      <div className="text-center text-sm text-muted-foreground">
        {type === 'login' ? (
          <>
            Don&apos;t have an account?{' '}
            <Link href="/auth/signup" className="text-primary hover:underline font-medium">
              Sign up
            </Link>
          </>
        ) : (
          <>
            Already have an account?{' '}
            <Link href="/auth/login" className="text-primary hover:underline font-medium">
              Sign in
            </Link>
          </>
        )}
      </div>
    </form>
  );
}
