import React from 'react';

export default function Footer() {
  return (
    <footer id="community" className="border-t border-white/10 bg-black py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 text-center md:flex-row md:text-left">
        <div>
          <p className="text-sm text-white/70">© {new Date().getFullYear()} Neon Parkour. All rights reserved.</p>
          <p className="mt-1 text-xs text-white/50">Made for explorers of momentum. Stay fast. Stay fluid.</p>
        </div>
        <div className="flex items-center gap-4 text-sm">
          <a href="#" className="text-white/70 hover:text-white">Privacy</a>
          <span className="text-white/20">•</span>
          <a href="#" className="text-white/70 hover:text-white">Terms</a>
          <span className="text-white/20">•</span>
          <a href="#" className="text-white/70 hover:text-white">Support</a>
        </div>
      </div>
    </footer>
  );
}
