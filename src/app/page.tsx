
'use client';

import { Certifications } from '@/components/portfolio/certifications';
import { Footer } from '@/components/portfolio/footer';
import { Header } from '@/components/portfolio/header';
import { Hero } from '@/components/portfolio/hero';
import { Projects } from '@/components/portfolio/projects';
import { Skills } from '@/components/portfolio/skills';
import { useDoc } from '@/firebase';
import { doc } from 'firebase/firestore';
import { useFirestore } from '@/firebase';
import { useUser } from '@/firebase';
import { defaultStudent, type Student } from '@/lib/student-data';
import { useMemo } from 'react';
import { useMemoFirebase } from '@/firebase/firestore/use-memo-firebase';

export default function Home() {
  const { user } = useUser();
  const firestore = useFirestore();

  const userDocRef = useMemoFirebase(() => {
    if (!firestore || !user) return null;
    return doc(firestore, 'users', user.uid);
  }, [firestore, user]);

  const { data: studentData } = useDoc<Student>(userDocRef);

  const student = useMemo(() => studentData || defaultStudent, [studentData]);

  return (
    <div className="flex min-h-[100dvh] flex-col bg-background">
      <Header />
      <main className="flex-1">
        <Hero student={student} />
        <Skills />
        <Projects />
        <Certifications />
      </main>
      <Footer student={student} />
    </div>
  );
}
