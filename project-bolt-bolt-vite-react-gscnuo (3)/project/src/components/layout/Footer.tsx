import React from 'react';

export function Footer() {
  return (
    <footer className="bg-[#493628] text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p>© {new Date().getFullYear()} DeniX. All rights reserved.</p>
      </div>
    </footer>
  );
}
