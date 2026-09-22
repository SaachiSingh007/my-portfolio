import { ArrowUpRight, Github, Linkedin, Mail, Phone, MapPin, Terminal } from 'lucide-react';
import { profile, socials } from '@/data/portfolio';

export default function Footer() {
  return (
    <footer id="contact" className="relative border-t border-base-800 bg-base-950 px-6 py-20">
      {/* Background subtle glow */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-market-500/5 to-transparent" />

      <div className="relative mx-auto max-w-4xl text-center">
        <p className="font-mono text-xs font-semibold uppercase tracking-wider text-market-400">
          04 / Get In Touch
        </p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Let’s chat about markets, code, or upcoming events.
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-balance text-sm leading-relaxed text-slate-400 sm:text-base">
          {/* I am currently open to conversations regarding <strong className="text-slate-200">Tech Residencies</strong>, the <strong className="text-slate-200">Lisbon Tech Summit</strong>, and <strong className="text-slate-200">Summer 2027</strong> quantitative trading, private equity, or software engineering positions. */}
        </p>

        {/* Primary Contact CTA Buttons */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 rounded-xl border border-market-500 bg-market-500 px-6 py-3 text-xs font-semibold uppercase tracking-wider text-base-950 transition-all duration-200 hover:bg-market-400 hover:shadow-lg hover:shadow-market-500/20 active:translate-y-0.5"
          >
            <Mail size={15} />
            <span>Send Email ({profile.email})</span>
          </a>

          <a
            href={socials.find((s) => s.label === 'LinkedIn')?.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-base-700 bg-base-850 px-5 py-3 text-xs font-semibold uppercase tracking-wider text-slate-200 transition-all duration-200 hover:border-tech-500/50 hover:bg-base-800 hover:text-white"
          >
            <Linkedin size={15} className="text-tech-400" />
            <span>Connect on LinkedIn</span>
            <ArrowUpRight size={13} />
          </a>
        </div>

        {/* Secondary Contact Info Pill Bar */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400 font-mono">
          <div className="flex items-center gap-2">
            <Mail size={13} className="text-market-400" />
            <span>{profile.altEmail}</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone size={13} className="text-tech-400" />
            <span>{profile.phone}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin size={13} className="text-gold-400" />
            <span>{profile.location}</span>
          </div>
        </div>

        {/* Social Link Badges */}
        <div className="mt-8 flex items-center justify-center gap-3">
          {socials.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-base-750 bg-base-900 text-slate-400 transition-all duration-200 hover:border-market-500/50 hover:bg-market-500/10 hover:text-market-300"
              >
                <Icon size={18} />
              </a>
            );
          })}
        </div>

        {/* Bottom copyright / tech credit */}
        <div className="mt-14 flex flex-col items-center justify-between gap-3 border-t border-base-800/80 pt-6 text-xs text-slate-500 sm:flex-row">
          <div className="flex items-center gap-2">
            <Terminal size={12} className="text-market-400" />
            <span>
              {new Date().getFullYear()} {profile.name}
            </span>
          </div>
          <p className="font-mono text-[11px] text-slate-500">

          </p>
        </div>
      </div>
    </footer>
  );
}
