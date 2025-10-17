
'use client';

import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { Button } from '@/components/ui/button';
import { useFirebaseApp } from '@/firebase';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const app = useFirebaseApp();
  const router = useRouter();

  const handleGoogleSignIn = async () => {
    if (app) {
      const auth = getAuth(app);
      const provider = new GoogleAuthProvider();
      try {
        await signInWithPopup(auth, provider);
        router.push('/');
      } catch (error) {
        console.error('Error signing in with Google', error);
      }
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-background">
      <div className="w-full max-w-md p-8 space-y-8 bg-card rounded-lg shadow-lg">
        <div className="text-center">
          <h1 className="text-3xl font-bold font-headline">Login</h1>
          <p className="mt-2 text-muted-foreground">Sign in to edit your portfolio</p>
        </div>
        <Button onClick={handleGoogleSignIn} className="w-full">
          Sign in with Google
        </Button>
      </div>
    </div>
  );
}
