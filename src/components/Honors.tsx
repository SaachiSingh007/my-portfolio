import { Award, GraduationCap, CheckCircle2, BookOpen, TrendingUp, Sparkles } from 'lucide-react';
import { education, honors, skillsByCategory } from '@/data/portfolio';
import SectionHeading from './SectionHeading';

export default function Honors() {
  return (
    <section id="academics" className="relative px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          label="03 / Education"
          title="Education and Awards"
          subtitle="Places I've studied, competitions I've been to, awards I've won."
        // badge="First Class Honours"
        />

        {/* Education Row */}
        <div className="grid gap-6 md:grid-cols-2">
          {education.map((edu) => (
            <div
              key={edu.institution}
              className="rounded-2xl border border-base-750 bg-base-900/70 p-6 backdrop-blur-sm transition-all duration-300 hover:border-base-600 hover:bg-base-850"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-market-500/30 bg-market-500/10 text-market-400">
                    <GraduationCap size={16} />
                  </div>
                  <span className="font-mono text-xs text-market-400 font-semibold">{edu.date}</span>
                </div>
                <span className="rounded-md border border-base-700 bg-base-800 px-2 py-0.5 font-mono text-[10px] text-slate-400">
                  {edu.location}
                </span>
              </div>

              <h3 className="mt-4 text-base font-bold text-white sm:text-lg">
                {edu.institution}
              </h3>
              <p className="mt-1 font-medium text-xs text-tech-300 sm:text-sm">
                {edu.degree}
              </p>
              <div className="mt-2 inline-block rounded-md border border-market-500/30 bg-market-500/10 px-2.5 py-1 font-mono text-xs font-semibold text-market-300">
                {edu.standing}
              </div>

              <ul className="mt-4 space-y-1.5 text-xs text-slate-300">
                {edu.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 size={13} className="mt-0.5 shrink-0 text-market-400" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Honors & Certifications Grid */}
        <div className="mt-12">
          <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-6">
            <Award className="text-gold-400" size={18} />
            <span>Competitions &amp; Certifications</span>
          </h3>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {honors.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="group relative flex flex-col justify-between rounded-xl border border-base-750 bg-base-900/60 p-5 transition-all duration-300 hover:border-gold-500/40 hover:bg-base-850 hover:shadow-lg hover:shadow-gold-500/5"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="rounded-md border border-gold-500/30 bg-gold-500/10 px-2 py-0.5 font-mono text-[10px] font-semibold text-gold-400">
                        {item.badge}
                      </span>
                      <span className="font-mono text-xs text-slate-500">{item.year}</span>
                    </div>

                    <h4 className="mt-3 text-sm font-bold text-white group-hover:text-gold-300 transition-colors">
                      {item.title}
                    </h4>
                    <p className="mt-0.5 text-xs font-medium text-slate-400">
                      {item.issuer}
                    </p>

                    <p className="mt-2.5 text-xs leading-relaxed text-slate-400">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Technical & Analytical Skills Matrix */}
        <div className="mt-12 rounded-2xl border border-base-750 bg-base-900/70 p-6 sm:p-8">
          <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-6">
            <Sparkles className="text-market-400" size={18} />
            <span>Core Competency Matrix</span>
          </h3>

          <div className="grid gap-6 md:grid-cols-3">
            {skillsByCategory.map((category) => (
              <div key={category.category} className="flex flex-col">
                <span className="font-mono text-xs font-semibold uppercase tracking-wider text-slate-400 border-b border-base-800 pb-2">
                  {category.category}
                </span>
                <div className="mt-3 flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-md border border-base-750 bg-base-850/80 px-2.5 py-1 text-xs text-slate-300 transition-colors hover:border-market-500/40 hover:text-white"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
