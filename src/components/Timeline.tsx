import { useState } from 'react';
import { Briefcase, Building2, MapPin, CheckCircle, ChevronRight, Filter } from 'lucide-react';
import { experiences, ExperienceCategory } from '@/data/portfolio';
import SectionHeading from './SectionHeading';

const categories: { label: string; value: ExperienceCategory; count: (list: typeof experiences) => number }[] = [
  { label: 'All Track Record', value: 'all', count: (list) => list.length },
  { label: 'Finance & PE', value: 'finance', count: (list) => list.filter((e) => e.category === 'finance').length },
  { label: 'Tech & Engineering', value: 'tech', count: (list) => list.filter((e) => e.category === 'tech').length },
  { label: 'People and Community', value: 'leadership', count: (list) => list.filter((e) => e.category === 'leadership').length },
];

export default function Timeline() {
  const [activeCategory, setActiveCategory] = useState<ExperienceCategory>('all');

  const filteredExperiences =
    activeCategory === 'all'
      ? experiences
      : experiences.filter((e) => e.category === activeCategory);

  return (
    <section id="experience" className="relative px-6 py-24 sm:py-32">
      {/* Background radial accent */}
      <div className="pointer-events-none absolute left-0 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-market-500/5 blur-[160px]" />

      <div className="relative mx-auto max-w-4xl">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
          <SectionHeading
            label="01 / Track Record"
            title="Work and Experiences"
            subtitle="Roles, internships, programmes, and stuff I've been up to."
          // badge="Markets × Engineering"
          />
        </div>

        {/* Filter categories */}
        <div className="mb-10 flex flex-wrap items-center gap-2 border-b border-base-800 pb-4">
          <span className="flex items-center gap-1.5 font-mono text-xs text-slate-400 mr-2">
            <Filter size={13} />
            Filter Track:
          </span>
          {categories.map((cat) => {
            const isActive = activeCategory === cat.value;
            const count = cat.count(experiences);

            return (
              <button
                key={cat.value}
                onClick={() => setActiveCategory(cat.value)}
                className={`inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium transition-all duration-200 ${isActive
                  ? 'border border-market-500/40 bg-market-500/15 text-market-300 shadow-sm shadow-market-500/10'
                  : 'border border-base-750 bg-base-900/60 text-slate-400 hover:border-base-700 hover:text-slate-200'
                  }`}
              >
                <span>{cat.label}</span>
                <span
                  className={`rounded-full px-1.5 py-0.2 text-[10px] font-mono ${isActive ? 'bg-market-500/30 text-market-200' : 'bg-base-800 text-slate-400'
                    }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Timeline Items */}
        <div className="relative">
          {/* Vertical continuous line */}
          <div className="absolute left-2.5 sm:left-4 top-3 bottom-4 w-px bg-gradient-to-b from-market-400 via-tech-500/40 to-transparent" />

          <ol className="space-y-10 sm:space-y-12">
            {filteredExperiences.map((exp, index) => (
              <li key={exp.id} className="relative pl-8 sm:pl-14">
                {/* Node marker */}
                <div className="absolute left-2.5 sm:left-4 top-2 flex h-5 w-5 -translate-x-1/2 items-center justify-center rounded-full border-2 border-market-400 bg-base-950 shadow-md shadow-market-500/30">
                  <div className="h-1.5 w-1.5 rounded-full bg-market-400" />
                </div>

                {/* Experience Card */}
                <div className="group rounded-2xl border border-base-750 bg-base-900/70 p-5 sm:p-7 backdrop-blur-sm transition-all duration-300 hover:border-base-600 hover:bg-base-850 hover:shadow-xl hover:shadow-black/30">
                  {/* Top line: Dates, Role Type, Category */}
                  <div className="flex flex-wrap items-center justify-between gap-2.5 border-b border-base-800/80 pb-3">
                    <div className="flex items-center gap-2">
                      <span className="inline-block rounded-md border border-base-700 bg-base-800 px-2.5 py-1 font-mono text-xs font-medium text-market-300">
                        {exp.date}
                      </span>
                      <span className="rounded-md border border-tech-500/20 bg-tech-500/10 px-2 py-0.5 font-mono text-[11px] text-tech-300">
                        {exp.roleType}
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
                      <MapPin size={12} className="text-slate-400" />
                      <span>{exp.location}</span>
                    </div>
                  </div>

                  {/* Title & Organization */}
                  <div className="mt-4">
                    <h3 className="text-lg font-bold text-white transition-colors group-hover:text-market-200 sm:text-xl">
                      {exp.title}
                    </h3>
                    <div className="mt-1 flex items-center gap-1.5 text-sm font-medium text-slate-300">
                      <Building2 size={14} className="text-market-400" />
                      <span>{exp.organization}</span>
                    </div>
                  </div>

                  {/* Key highlights / achievements */}
                  <ul className="mt-4 space-y-2 text-xs leading-relaxed text-slate-300 sm:text-sm">
                    {exp.highlights.map((bullet, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-market-400" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tag pills */}
                  <div className="mt-5 flex flex-wrap gap-1.5 pt-3 border-t border-base-800/60">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md border border-base-750 bg-base-800/50 px-2.5 py-0.5 font-mono text-[11px] text-slate-400 transition-colors group-hover:border-base-700 group-hover:text-slate-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
