import React from 'react';
import { Rocket } from 'lucide-react';

export default function NavBar() {
  return (
    <header className="sticky top-0 z-30 w-full border-b border-white/10 bg-black/60 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
        <a href="#" className="group inline-flex items-center gap-2">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-fuchsia-600 to-indigo-600 text-white shadow-lg ring-1 ring-white/10">
            <Rocket size={18} />
          </span>
          <span className="text-lg font-semibold tracking-tight">Neon Parkour</span>
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          <a href="#features" className="text-sm text-white/80 transition hover:text-white">Features</a>
          <a href="#play" className="text-sm text-white/80 transition hover:text-white">Play</a>
          <a href="#community" className="text-sm text-white/80 transition hover:text-white">Community</a>
        </nav>
        <div className="flex items-center gap-3">
          <a href="#play" className="rounded-md bg-white/5 px-4 py-2 text-sm font-medium text-white ring-1 ring-white/10 transition hover:bg-white/10">Download</a>
          <a href="#play" className="rounded-md bg-gradient-to-r from-fuchsia-600 to-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-lg shadow-fuchsia-600/20 transition hover:brightness-110">Play Now</a>
        </div>
      </div>
    </header>
  );
}
