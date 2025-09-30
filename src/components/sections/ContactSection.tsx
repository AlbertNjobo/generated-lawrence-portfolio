import React from 'react';
import { RESUME_DATA } from '@/lib/data';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail } from 'lucide-react';
export function ContactSection() {
  return (
    <section id="contact">
      <Card className="print:border-none print:shadow-none">
        <CardHeader className="text-center">
          <CardTitle className="font-mono text-2xl">Let's Connect</CardTitle>
        </CardHeader>
        <CardContent className="text-center">
          <p className="mx-auto max-w-xl text-muted-foreground">
            I'm currently seeking opportunities where I can apply my skills in software engineering and cybersecurity. If you have a project or role in mind—or just want to chat—my inbox is always open.
          </p>
          <a href={`mailto:${RESUME_DATA.contact.email}`} className="mt-6 inline-block">
            <Button>
              <Mail className="mr-2 h-4 w-4" />
              {RESUME_DATA.contact.email}
            </Button>
          </a>
        </CardContent>
      </Card>
    </section>
  );
}