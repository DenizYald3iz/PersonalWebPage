import React from 'react';
import { CV } from '../components/sections/CV';
import { Portfolio } from '../components/sections/Portfolio';

export function MePage() {
  return (
    <main className="pt-20">
      <CV />
      <Portfolio />
    </main>
  );
}