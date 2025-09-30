import React from 'react';
import { RESUME_DATA } from '@/lib/data';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';
export function ExperienceSection() {
  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: [0.42, 0, 0.58, 1],
      },
    },
  };
  return (
    <section id="experience">
      <Card className="print:border-none print:shadow-none">
        <CardHeader>
          <CardTitle className="font-mono text-2xl">Professional Experience</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {RESUME_DATA.experience.map((exp, index) => (
            <motion.div
              key={`${exp.company}-${exp.role}`}
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: index * 0.1 }}
              className="relative pl-6 before:absolute before:left-0 before:top-2 before:h-full before:w-0.5 before:bg-border last:before:hidden"
            >
              <div className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-primary"></div>
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between">
                <h3 className="font-semibold">{exp.role}</h3>
                <p className="text-sm text-muted-foreground">{exp.period}</p>
              </div>
              <p className="text-sm text-muted-foreground">{exp.company} &bull; {exp.location}</p>
            </motion.div>
          ))}
        </CardContent>
      </Card>
    </section>
  );
}