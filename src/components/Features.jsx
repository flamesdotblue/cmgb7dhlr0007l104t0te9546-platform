import React from 'react';
import { Zap, Shield, Gamepad2, Rocket } from 'lucide-react';

const features = [
  {
    title: 'Fluid Parkour',
    desc: 'Chain wall-runs, slides, vaults, and mantles with responsive, momentum-first controls.',
    icon: Zap,
    color: 'from-fuchsia-500 to-pink-500',
  },
  {
    title: 'Challenge Modes',
    desc: 'Speedrun ghosts, trick challenges, and precision time trials with global leaderboards.',
    icon: Rocket,
    color: 'from-indigo-500 to-purple-500',
  },
  {
    title: 'Skill-Based Combat',
    desc: 'Optional encounters that reward movement mastery—disarm, dodge, and outplay.',
    icon: Shield,
    color: 'from-violet-500 to-indigo-500',
  },
  {
    title: 'Controller Ready',
    desc: 'Seamless support for keyboard/mouse and controllers with remappable inputs.',
    icon: Gamepad2,
    color: 'from-cyan-500 to-blue-500',
  },
];

export default function Features() {
  return (
    <section id="features" className="relative z-10 border-t border-white/10 bg-black py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-10 flex items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Built for speed and style</h2>
            <p className="mt-2 max-w-2xl text-white/70">Every surface is a possibility. Master routes, discover shortcuts, and forge your flow through luminous, vertical playgrounds.</p>
          </div>
          <a href="#play" className="hidden rounded-md bg-white/5 px-4 py-2 text-sm font-medium text-white ring-1 ring-white/10 transition hover:bg-white/10 md:inline-block">Jump In</a>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <article key={f.title} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-5 transition hover:border-white/20">
              <div className={`mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${f.color} text-white shadow-lg shadow-black/40`}>
                <f.icon size={20} />
              </div>
              <h3 className="text-lg font-semibold tracking-tight">{f.title}</h3>
              <p className="mt-2 text-sm text-white/70">{f.desc}</p>
              <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-br from-fuchsia-500/10 to-indigo-500/10 blur-2xl" />
            </article>
          ))}
        </div>

        <div className="mt-14 grid items-start gap-6 lg:grid-cols-2">
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-xl font-semibold">Movement Sandbox</h3>
            <p className="mt-2 text-white/70">Practice combos in a frictionless training space. Toggle assisted lines, ghost runs, and split-time segments to perfect your route.</p>
            <div className="mt-6 flex flex-wrap gap-3 text-xs text-white/70">
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">Ghosts</span>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">Assist Lines</span>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">Split Times</span>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">Replay System</span>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-xl font-semibold">Neon Cityscapes</h3>
            <p className="mt-2 text-white/70">Traverse multi-layered districts—industrial spires, synth gardens, and submerged rails—each with hidden portals and trick routes.</p>
            <div className="mt-6 grid grid-cols-3 gap-3">
              <div className="h-24 rounded-lg bg-gradient-to-br from-fuchsia-600/20 to-indigo-600/20 ring-1 ring-inset ring-white/10" />
              <div className="h-24 rounded-lg bg-gradient-to-br from-indigo-600/20 to-violet-600/20 ring-1 ring-inset ring-white/10" />
              <div className="h-24 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-500/20 ring-1 ring-inset ring-white/10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
