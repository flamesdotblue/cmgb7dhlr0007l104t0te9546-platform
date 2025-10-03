import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden" id="play">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1200px_600px_at_70%_-10%,rgba(168,85,247,0.25),transparent_60%),radial-gradient(800px_500px_at_20%_120%,rgba(99,102,241,0.22),transparent_60%)]" />

      <div className="relative z-10 mx-auto flex min-h-[90vh] max-w-7xl flex-col items-start justify-center gap-6 px-4">
        <h1 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          Leap into the neon skyline
          <span className="block bg-gradient-to-r from-fuchsia-400 via-purple-300 to-indigo-400 bg-clip-text text-transparent">A 3D Parkour Platformer</span>
        </h1>
        <p className="max-w-2xl text-base text-white/80 md:text-lg">
          Wall-run, vault, and dash across a cybernetic city. Master momentum and style to conquer surreal levels filled with kinetic puzzles and high-speed chases.
        </p>
        <div className="flex flex-wrap gap-3">
          <a href="#features" className="rounded-md bg-gradient-to-r from-fuchsia-600 to-indigo-600 px-5 py-3 text-sm font-medium text-white shadow-lg shadow-fuchsia-600/20 transition hover:brightness-110">
            Explore Features
          </a>
          <a href="#download" className="rounded-md border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white backdrop-blur transition hover:bg-white/10">
            Wishlist/Download
          </a>
        </div>
      </div>
    </section>
  );
}
