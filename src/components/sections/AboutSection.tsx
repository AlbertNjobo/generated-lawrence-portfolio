import React from 'react';
import { RESUME_DATA } from '@/lib/data';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
export function AboutSection() {
  return (
    <section id="about">
      <Card className="print:border-none print:shadow-none">
        <CardHeader>
          <CardTitle className="font-mono text-2xl">About Me</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-3">
            <div className="flex justify-center md:justify-start">
              <Avatar className="h-32 w-32 border-2 border-border">
                <AvatarImage src={RESUME_DATA.about.photoUrl} alt={RESUME_DATA.name} loading="lazy" />
                <AvatarFallback>{RESUME_DATA.name.charAt(0)}</AvatarFallback>
              </Avatar>
            </div>
            <div className="space-y-4 text-muted-foreground md:col-span-2">
              {RESUME_DATA.about.paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}