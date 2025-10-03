import React from 'react';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Features from './components/Features';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white antialiased">
      <NavBar />
      <main>
        <Hero />
        <Features />
      </main>
      <Footer />
    </div>
  );
}
