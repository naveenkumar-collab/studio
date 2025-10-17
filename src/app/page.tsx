import { Certifications } from '@/components/portfolio/certifications';
import { Footer } from '@/components/portfolio/footer';
import { Header } from '@/components/portfolio/header';
import { Hero } from '@/components/portfolio/hero';
import { Projects } from '@/components/portfolio/projects';
import { Skills } from '@/components/portfolio/skills';

export default function Home() {
  return (
    <div className="flex min-h-[100dvh] flex-col bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <Skills />
        <Projects />
        <Certifications />
      </main>
      <Footer />
    </div>
  );
}
