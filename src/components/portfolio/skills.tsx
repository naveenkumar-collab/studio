"use client";

import { Progress } from "@/components/ui/progress";
import { useEffect, useState } from "react";

const skills = [
  { name: 'HTML5', level: 95 },
  { name: 'CSS3 & Tailwind', level: 90 },
  { name: 'JavaScript (ES6+)', level: 85 },
  { name: 'TypeScript', level: 80 },
  { name: 'React', level: 85 },
  { name: 'Next.js', level: 80 },
  { name: 'Node.js & Express', level: 75 },
  { name: 'Git & GitHub', level: 90 },
];

export function Skills() {
  const [progressLevels, setProgressLevels] = useState<Record<string, number>>({});

  useEffect(() => {
    const timers = skills.map((skill, index) =>
      setTimeout(() => {
        setProgressLevels(prev => ({ ...prev, [skill.name]: skill.level }));
      }, 150 * index)
    );
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <section id="skills" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-5xl">My Skills</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              I'm proficient in a range of modern web technologies.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-4xl gap-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
            {skills.map((skill) => (
              <div key={skill.name} className="space-y-2">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-medium">{skill.name}</h3>
                  <span className="text-muted-foreground font-semibold">{progressLevels[skill.name] || 0}%</span>
                </div>
                <Progress value={progressLevels[skill.name] || 0} aria-label={`${skill.name} proficiency`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
