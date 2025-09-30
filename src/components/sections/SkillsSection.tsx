import React from 'react';
import { RESUME_DATA } from '@/lib/data';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';
export function SkillsSection() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
      },
    },
  };
  return (
    <section id="skills">
      <Card className="print:border-none print:shadow-none">
        <CardHeader>
          <CardTitle className="font-mono text-2xl">My Skills</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {RESUME_DATA.skills.map((skillCategory) => (
            <motion.div 
              key={skillCategory.category}
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <h3 className="mb-2 text-lg font-semibold">{skillCategory.category}</h3>
              <div className="flex flex-wrap gap-2">
                {skillCategory.items.map((item) => (
                  <motion.div key={item} variants={itemVariants}>
                    <Badge variant="secondary" className="text-sm font-normal">
                      {item}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </CardContent>
      </Card>
    </section>
  );
}