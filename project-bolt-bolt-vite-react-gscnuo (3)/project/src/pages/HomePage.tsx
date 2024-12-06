import React from 'react';
import { Hero } from '../components/sections/Hero';
import { Blog } from '../components/sections/Blog';
import { Notes } from '../components/sections/Notes';
import { Projects } from '../components/sections/Projects';

export function HomePage() {
  return (
    <main>
      <Hero />
      <Blog />
      <Notes />
      <Projects />
    </main>
  );
}