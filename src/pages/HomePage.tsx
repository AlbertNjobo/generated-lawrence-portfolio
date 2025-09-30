import React from 'react';
import { Header } from '@/components/Header';
import { HeroSection } from '@/components/sections/HeroSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { SkillsSection } from '@/components/sections/SkillsSection';
import { ProjectsSection } from '@/components/sections/ProjectsSection';
import { ExperienceSection } from '@/components/sections/ExperienceSection';
import { ContactSection } from '@/components/sections/ContactSection';
import { Footer } from '@/components/Footer';
import { motion } from 'framer-motion';
export function HomePage() {
  const sections = [
    { name: 'about', component: <AboutSection /> },
    { name: 'skills', component: <SkillsSection /> },
    { name: 'projects', component: <ProjectsSection /> },
    { name: 'experience', component: <ExperienceSection /> },
    { name: 'contact', component: <ContactSection /> },
  ];
  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.42, 0, 0.58, 1]
      }
    }
  };
  return (
    <div className="bg-background text-foreground font-sans">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-background focus:text-foreground focus:border focus:rounded-lg">
        Skip to main content
      </a>
      <Header />
      <main id="main-content" className="container mx-auto max-w-4xl px-4">
        <div id="home">
          <HeroSection />
        </div>
        <div className="space-y-16 py-16 md:space-y-24 md:py-24">
          {sections.map((section) => (
            <motion.section
              key={section.name}
              id={section.name}
              variants={sectionVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              {section.component}
            </motion.section>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}