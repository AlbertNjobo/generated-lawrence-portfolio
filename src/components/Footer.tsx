import { RESUME_DATA } from '@/lib/data';
import React from 'react';
export function Footer() {
  return (
    <footer className="py-8 text-center text-sm text-muted-foreground print:hidden">
      <div className="flex items-center justify-center gap-4">
        {RESUME_DATA.contact.social.map((social) => (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Link to ${social.name}`}
            className="transition-colors hover:text-foreground"
          >
            <social.icon className="h-4 w-4" />
            <span className="sr-only">{social.name}</span>
          </a>
        ))}
      </div>
      <p className="mt-4">
        Built by {RESUME_DATA.name} with ❤️ at Cloudflare
      </p>
    </footer>
  );
}