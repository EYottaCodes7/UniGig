'use client';

import { Navbar } from '@/components/navbar';
import { AuthForm } from '@/components/auth-form';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import { useAuth } from '@/contexts/auth-context';

export default function LoginPage() {
  const { signIn } = useAuth();
  const router = useRouter();

  const handleSubmit = async (formData: { email: string; password: string }) => {
    const { error } = await signIn(formData.email, formData.password);
    if (error) {
      toast.error(error.message);
      return;
    }
    toast.success('Signed in');
    router.push('/marketplace');
    router.refresh();
  };

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <div className="grid min-h-[calc(100vh-64px)] grid-cols-1 lg:grid-cols-2">
        <div className="hidden lg:flex flex-col justify-center items-start gap-8 px-12 bg-gradient-to-br from-primary/20 to-secondary/20">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary text-primary-foreground font-bold text-2xl">
                U
              </div>
              <h2 className="text-3xl font-bold text-foreground">UniGig</h2>
            </div>
            <p className="text-xl text-foreground font-semibold">
              Turn Your Skills Into Income
            </p>
            <p className="text-lg text-muted-foreground max-w-sm">
              Connect with thousands of students on campus. Earn money by offering your skills or find the help you need.
            </p>
          </div>

          <div className="space-y-6 max-w-sm">
            {[
              { title: 'Find Help Fast', desc: 'Browse services or post requests' },
              { title: 'Earn Money', desc: 'Share your skills and get paid' },
              { title: 'Build Reputation', desc: 'Grow your profile and reviews' },
            ].map((item, i) => (
              <div key={i} className="space-y-1">
                <h4 className="font-bold text-foreground">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col justify-center px-6 py-12 sm:px-12 lg:px-16">
          <div className="w-full max-w-md mx-auto space-y-8">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold text-foreground">Welcome Back</h1>
              <p className="text-muted-foreground">
                Sign in to your UniGig account to continue
              </p>
            </div>

            <AuthForm type="login" onSubmit={handleSubmit} />

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-border" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">Or</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                className="h-12 rounded-lg border border-border bg-card hover:bg-card/80 transition-colors font-medium text-foreground"
                onClick={() => toast.info('Configure OAuth in the Supabase dashboard')}
              >
                Google
              </button>
              <button
                type="button"
                className="h-12 rounded-lg border border-border bg-card hover:bg-card/80 transition-colors font-medium text-foreground"
                onClick={() => toast.info('Configure OAuth in the Supabase dashboard')}
              >
                GitHub
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
