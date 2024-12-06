import React from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useNavigation } from '../../hooks/useNavigation';

const navigationItems = [
  { name: 'Blog', href: '/blog' },
  { name: 'Lecture Notes', href: '/notes' },
  { name: 'Projects', href: '/me' },
  { name: 'Me', href: '/me' },
  { name: 'Edit', href: '/editor' },
];

export function Header() {
  const { isMenuOpen, toggleMenu } = useNavigation();
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 bg-[#E4E0E1]/90 backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="text-[#493628] text-2xl font-semibold">
            Deniz YALDIZ
          </Link>

          <button onClick={toggleMenu} className="lg:hidden text-[#493628]">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <nav className="hidden lg:flex space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-[#493628] hover:text-[#AB886D] transition-colors duration-200 ${
                  location.pathname === item.href ? 'font-semibold' : ''
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-[#E4E0E1] shadow-lg">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="block px-3 py-2 text-[#493628] hover:text-[#AB886D] transition-colors duration-200"
                onClick={toggleMenu}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}