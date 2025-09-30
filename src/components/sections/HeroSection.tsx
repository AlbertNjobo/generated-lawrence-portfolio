import React from 'react';
import { RESUME_DATA } from '@/lib/data';
import { Button } from '@/components/ui/button';

import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
export function HeroSection() {
  React.useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = '';
    };
  }, []);

  return (
    <section id="home" className="flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-6"
      >
        <h1 className="font-mono text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
          {RESUME_DATA.name}
        </h1>
        <p className="max-w-2xl text-lg text-muted-foreground sm:text-xl">
          {RESUME_DATA.tagline}
        </p>
        <p className="max-w-3xl text-base leading-relaxed text-foreground/80">
          {RESUME_DATA.statement}
        </p>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a href="#projects">
            <Button className="group w-full sm:w-auto">
              View My Work
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </a>
          <a href="#contact">
            <Button variant="outline" className="w-full sm:w-auto">
              Get In Touch
            </Button>
          </a>
        </div>
        <div className="flex justify-center space-x-4">
          {RESUME_DATA.contact.social.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.name}
            >
              <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
                <social.icon className="h-5 w-5" />
              </Button>
            </a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}