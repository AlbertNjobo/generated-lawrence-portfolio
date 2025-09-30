import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { RESUME_DATA } from '@/lib/data';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';
export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const navLinkClasses = "cursor-pointer text-sm font-medium text-foreground/70 hover:text-foreground transition-colors duration-200";
  const renderNavLinks = () => (
    RESUME_DATA.navLinks.map((link) => (
      <Link
        key={link.name}
        to={link.to}
        spy={true}
        smooth={true}
        offset={-80}
        duration={500}
        className={navLinkClasses}
        activeClass="text-foreground font-semibold"
        onClick={() => setIsMenuOpen(false)}
      >
        {link.name}
      </Link>
    ))
  );
  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full transition-all duration-300 print:hidden',
        isScrolled ? 'border-b border-border/40 bg-background/80 backdrop-blur-lg' : 'bg-background'
      )}
    >
      <div className="container mx-auto flex h-16 max-w-4xl items-center justify-between px-4 md:px-0">
        <Link to="home" smooth={true} duration={500} className="font-mono text-lg font-semibold cursor-pointer">
          {RESUME_DATA.name}
        </Link>
        <nav className="hidden items-center space-x-6 md:flex">
          {renderNavLinks()}
        </nav>
        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle mobile menu">
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute top-16 left-0 w-full border-b bg-background shadow-md md:hidden"
          >
            <nav className="flex flex-col space-y-4 p-4">
              {renderNavLinks()}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}