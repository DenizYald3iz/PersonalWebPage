import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/layout/Header';
import { HomePage } from './pages/HomePage';
import { MePage } from './pages/MePage';
import { EditorPage } from './pages/EditorPage';
import { BlogPage } from './pages/BlogPage';
import { NotesPage } from './pages/NotesPage';
import { Footer } from './components/layout/Footer';

export function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#E4E0E1]">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/me" element={<MePage />} />
          <Route path="/editor" element={<EditorPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/notes" element={<NotesPage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}