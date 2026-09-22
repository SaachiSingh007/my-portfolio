import { useEffect, useState } from 'react';
import { Menu, X, ArrowUpRight, Terminal } from 'lucide-react';
import { navLinks, profile } from '@/data/portfolio';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleClick = () => setMobileOpen(false);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-base-750/80 bg-base-950/85 backdrop-blur-xl shadow-lg shadow-black/20'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Brand identity */}
        <a
          href="#about"
          className="group flex items-center gap-2.5 text-sm font-semibold tracking-tight text-white transition-colors"
        >
          <div className="flex h-7 w-7 items-center justify-center rounded-lg border border-market-500/30 bg-market-500/10 text-market-400 font-mono text-xs transition-transform group-hover:scale-105 group-hover:border-market-400">
            <Terminal size={14} />
          </div>
          <div className="flex flex-col">
            <span className="font-semibold text-white group-hover:text-market-300 transition-colors">
              {profile.name}
            </span>
            <span className="font-mono text-[10px] text-slate-400 group-hover:text-tech-300 transition-colors">
              markets × tech
            </span>
          </div>
        </a>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-xs font-medium uppercase tracking-wider text-slate-400 transition-colors duration-200 hover:text-market-300"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right action */}
        <div className="hidden items-center gap-3 md:flex">
          <a
            href="mailto:saachisingh21@gmail.com"
            className="inline-flex items-center gap-1.5 rounded-lg border border-base-700 bg-base-850/80 px-3.5 py-1.5 text-xs font-medium text-slate-200 transition-all duration-200 hover:border-market-500/50 hover:bg-market-500/10 hover:text-market-300"
          >
            <span>Contact</span>
            <ArrowUpRight size={13} />
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen((v) => !v)}
          className="rounded-lg border border-base-750 bg-base-900 p-2 text-slate-300 transition-colors hover:text-white md:hidden"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile menu dropdown */}
      {mobileOpen && (
        <div className="border-b border-base-750 bg-base-950/95 backdrop-blur-2xl md:hidden">
          <ul className="flex flex-col gap-1 px-6 py-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={handleClick}
                  className="block rounded-lg px-3 py-2 text-sm text-slate-300 transition-colors hover:bg-base-850 hover:text-market-300"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="mt-3 pt-3 border-t border-base-800">
              <a
                href="mailto:saachisingh21@gmail.com"
                onClick={handleClick}
                className="flex items-center justify-center gap-2 rounded-lg border border-market-500/40 bg-market-500/10 py-2.5 text-xs font-medium text-market-300"
              >
                <span>Get in touch directly</span>
                <ArrowUpRight size={14} />
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
