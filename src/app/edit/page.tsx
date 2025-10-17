
'use client';

import { EditForm } from '@/components/portfolio/edit-form';
import { Header } from '@/components/portfolio/header';
import { useUser } from '@/firebase';
import Link from 'next/link';

export default function EditPage() {
  const { user, loading } = useUser();

  if (loading) {
    return (
      <div className="flex min-h-[100dvh] flex-col bg-background items-center justify-center">
        <p>Loading...</p>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="flex min-h-[100dvh] flex-col bg-background">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-bold font-headline tracking-tighter sm:text-5xl">Access Denied</h1>
            <p className="mt-4 max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              You must be logged in to edit your details.
            </p>
            <div className="mt-6">
              <Link href="/login" className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
                Login
              </Link>
            </div>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="flex min-h-[100dvh] flex-col bg-background">
      <Header />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold font-headline tracking-tighter sm:text-5xl">Edit Your Details</h1>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Update your personal information for the portfolio.
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-2xl py-12">
              <EditForm />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
