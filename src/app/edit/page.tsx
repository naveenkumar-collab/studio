import { EditForm } from '@/components/portfolio/edit-form';
import { Header } from '@/components/portfolio/header';

export default function EditPage() {
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
