import { ArrowDown, ArrowUpRight, MapPin, CheckCircle2, Terminal } from 'lucide-react';
import { profile, socials, keySignals } from '@/data/portfolio';

export default function Hero() {
  return (
    <section
      id="about"
      className="relative flex min-h-[92vh] flex-col justify-center overflow-hidden px-6 pt-28 pb-16 bg-grid-pattern"
    >
      {/* Ambient background glow accents */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-1/4 h-[450px] w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-market-500/10 blur-[130px]" />
        <div className="absolute right-1/4 top-1/3 h-[400px] w-[400px] rounded-full bg-tech-500/10 blur-[140px]" />
        <div className="absolute left-1/2 bottom-10 h-[300px] w-[500px] -translate-x-1/2 rounded-full bg-indigo-500/5 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl">
        {/* Top meta status bar */}
        <div className="flex flex-wrap items-center gap-3">
          <div className="inline-flex items-center gap-2 rounded-full border border-market-500/30 bg-market-500/10 px-3.5 py-1 text-xs font-medium text-market-300 backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-market-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-market-400" />
            </span>
            <span>{profile.status}</span>
          </div>

          <div className="inline-flex items-center gap-1.5 rounded-full border border-base-750 bg-base-900/60 px-3 py-1 font-mono text-xs text-slate-400 backdrop-blur-md">
            <MapPin size={12} className="text-market-400" />
            <span>{profile.location}</span>
          </div>

          <div className="hidden sm:inline-flex items-center gap-1.5 rounded-full border border-base-750 bg-base-900/60 px-3 py-1 font-mono text-xs text-slate-400 backdrop-blur-md">
            <span className="text-slate-500">Curriculum:</span>
            <span className="text-slate-200">UCD Quinn · BSc Economics & Finance</span>
          </div>
        </div>

        {/* Main headline */}
        <div className="mt-8 max-w-4xl">
          <h1 className="text-balance text-4xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl leading-[1.08]">
            Saachi Singh{' '}
          </h1>

          <p className="mt-6 max-w-3xl text-balance text-base leading-relaxed text-slate-300 sm:text-lg">
            Hi, I’m Saachi. I love markets and technology. Currently studying Economics & Finance, but I build anything I find interesting. Currently building CoverCraft and Pairs Trading Model.

          </p>
        </div>

        {/* Key Signal Metrics Bar */}
        <div id="signals" className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
          {keySignals.map((signal) => {
            const Icon = signal.icon;
            const accentClasses =
              signal.accent === 'emerald'
                ? 'border-market-500/30 bg-market-500/5 text-market-400'
                : signal.accent === 'cyan'
                  ? 'border-tech-500/30 bg-tech-500/5 text-tech-400'
                  : 'border-gold-500/30 bg-gold-500/5 text-gold-400';

            return (
              <div
                key={signal.label}
                className="group relative rounded-xl border border-base-750 bg-base-900/70 p-4 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-base-600 hover:bg-base-850"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-medium tracking-wide uppercase text-slate-400">
                    {signal.label}
                  </span>
                  <div className={`flex h-7 w-7 items-center justify-center rounded-lg border ${accentClasses}`}>
                    <Icon size={14} />
                  </div>
                </div>
                <div className="mt-2 text-lg font-bold tracking-tight text-white sm:text-xl">
                  {signal.value}
                </div>
                <div className="mt-0.5 font-mono text-[11px] text-slate-400">
                  {signal.sub}
                </div>
              </div>
            );
          })}
        </div>

        {/* CTAs & Social Links */}
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-xl border border-market-500 bg-market-500 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-base-950 transition-all duration-200 hover:bg-market-400 hover:shadow-lg hover:shadow-market-500/20 active:translate-y-0.5"
          >
            <span>Explore Featured Projects</span>
            <ArrowDown size={14} />
          </a>

          <a
            href="#experience"
            className="inline-flex items-center gap-2 rounded-xl border border-base-700 bg-base-850 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-slate-200 transition-all duration-200 hover:border-tech-500/50 hover:bg-base-800 hover:text-white"
          >
            <span>View Experience</span>
            <ArrowUpRight size={14} />
          </a>

          <div className="ml-auto flex items-center gap-2.5">
            {socials.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  title={`${social.label}: ${social.handle}`}
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-base-750 bg-base-900/80 text-slate-400 transition-all duration-200 hover:border-market-500/50 hover:bg-market-500/10 hover:text-market-300"
                >
                  <Icon size={18} />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section >
  );
}
