import { ArrowUpRight, Github, ExternalLink, Star, Activity, Bot, Cpu, LineChart, Binary } from 'lucide-react';
import { projects, Project } from '@/data/portfolio';
import SectionHeading from './SectionHeading';

function ProjectGraphic({ kind }: { kind: Project['graphicKind'] }) {
  if (kind === 'quant') {
    return (
      <div className="relative h-44 w-full overflow-hidden rounded-xl border border-base-750 bg-base-950/80 p-3 font-mono">
        {/* Terminal Header */}
        <div className="flex items-center justify-between border-b border-base-800 pb-2 text-[10px] text-slate-400">
          <div className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-market-400" />
            <span className="text-slate-300">SPREAD_ZSCORE_ENGINE</span>
          </div>
          <span className="text-market-400 font-semibold">p = 0.024 &lt; 0.05</span>
        </div>

        {/* Quant Spread SVG */}
        <div className="relative mt-2 h-24 w-full">
          <svg className="h-full w-full overflow-visible" viewBox="0 0 300 90" preserveAspectRatio="none">
            {/* Grid lines */}
            <line x1="0" y1="15" x2="300" y2="15" stroke="rgba(255,255,255,0.08)" strokeDasharray="3 3" />
            <line x1="0" y1="45" x2="300" y2="45" stroke="rgba(52,211,153,0.3)" strokeDasharray="4 2" />
            <line x1="0" y1="75" x2="300" y2="75" stroke="rgba(255,255,255,0.08)" strokeDasharray="3 3" />

            {/* Threshold text */}
            <text x="5" y="12" fill="#64748b" fontSize="8">+2.0σ Upper Band</text>
            <text x="5" y="42" fill="#34d399" fontSize="8">Mean (0.0σ)</text>
            <text x="5" y="86" fill="#64748b" fontSize="8">-2.0σ Lower Band</text>

            {/* Spread Area Glow */}
            <defs>
              <linearGradient id="spreadGlow" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#10b981" stopOpacity="0.25" />
                <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.0" />
              </linearGradient>
            </defs>
            <path
              d="M0,45 Q25,20 50,28 T100,68 T150,14 T200,55 T250,78 T300,45 L300,90 L0,90 Z"
              fill="url(#spreadGlow)"
            />

            {/* Oscillating Spread Line */}
            <path
              d="M0,45 Q25,20 50,28 T100,68 T150,14 T200,55 T250,78 T300,45"
              fill="none"
              stroke="#34d399"
              strokeWidth="2"
            />

            {/* Signal points */}
            <circle cx="150" cy="14" r="3.5" fill="#f87171" stroke="#ffffff" strokeWidth="1" />
            <circle cx="250" cy="78" r="3.5" fill="#34d399" stroke="#ffffff" strokeWidth="1" />
          </svg>
        </div>

        {/* Footer Metrics */}
        <div className="mt-1 flex items-center justify-between text-[10px] text-slate-400">
          <span className="text-slate-400">Window: 60-bar rolling</span>
          <span className="text-tech-300">OLS β: 1.341 (dynamic)</span>
          <span className="text-market-400">Signal: Mean Revert</span>
        </div>
      </div>
    );
  }

  if (kind === 'ai') {
    return (
      <div className="relative h-44 w-full overflow-hidden rounded-xl border border-base-750 bg-base-950/80 p-3 font-mono">
        <div className="flex items-center justify-between border-b border-base-800 pb-2 text-[10px] text-slate-400">
          <div className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-tech-400 animate-pulse" />
            <span className="text-slate-300">COVERCRAFT_SYNTHESIS_PIPELINE</span>
          </div>
          <span className="text-tech-300">Live Web App</span>
        </div>

        {/* Flow Diagram */}
        <div className="mt-3 flex h-24 items-center justify-between gap-1 text-[9px]">
          {/* Node 1 */}
          <div className="flex flex-1 flex-col items-center rounded-lg border border-base-750 bg-base-900/90 p-2 text-center">
            <span className="text-market-400 font-semibold">User CV</span>
            <span className="mt-1 text-[8px] text-slate-400">PDF / Skills Extraction</span>
          </div>

          <span className="text-tech-400 font-bold">→</span>

          {/* Node 2 */}
          <div className="flex flex-1 flex-col items-center rounded-lg border border-base-750 bg-base-900/90 p-2 text-center">
            <span className="text-tech-300 font-semibold">Job URL</span>
            <span className="mt-1 text-[8px] text-slate-400">Live Scraping &amp; ATS</span>
          </div>

          <span className="text-tech-400 font-bold">→</span>

          {/* Node 3 */}
          <div className="flex flex-1 flex-col items-center rounded-lg border border-market-500/40 bg-market-500/10 p-2 text-center shadow-sm shadow-market-500/20">
            <span className="text-white font-semibold">Tailored Letter</span>
            <span className="mt-1 text-[8px] text-market-300">High-Match Output</span>
          </div>
        </div>

        <div className="mt-1 flex items-center justify-between text-[10px] text-slate-400">
          <span className="text-slate-400">Host: craft-letter-pro.lovable.app</span>
          <span className="text-market-400 font-medium">ATS Match Score: 96%</span>
        </div>
      </div>
    );
  }

  if (kind === 'robotics') {
    return (
      <div className="relative h-44 w-full overflow-hidden rounded-xl border border-base-750 bg-base-950/80 p-3 font-mono">
        <div className="flex items-center justify-between border-b border-base-800 pb-2 text-[10px] text-slate-400">
          <div className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-market-400" />
            <span className="text-slate-300">ESP32_AUTONOMOUS_VESSEL</span>
          </div>
          <span className="text-market-300 font-semibold">Dublin Royal Canal</span>
        </div>

        {/* Sonar & Telemetry graphic */}
        <div className="relative mt-2 flex h-24 items-center justify-around">
          {/* Radar circle */}
          <div className="relative flex h-20 w-20 items-center justify-center rounded-full border border-market-500/30 bg-market-500/5">
            <div className="absolute h-14 w-14 rounded-full border border-dashed border-tech-500/40" />
            <div className="absolute h-7 w-7 rounded-full border border-market-400/60" />
            <div className="h-1.5 w-1.5 rounded-full bg-market-400" />
            <div className="absolute top-2 right-4 h-1.5 w-1.5 rounded-full bg-tech-300 animate-ping" />
          </div>

          {/* Telemetry info */}
          <div className="flex flex-col gap-1 text-[9px]">
            <div className="flex items-center gap-1.5 rounded border border-base-750 bg-base-900/80 px-2 py-0.5">
              <span className="text-slate-400">Obstacle Avoidance:</span>
              <span className="text-market-300">Ultrasonic 40kHz</span>
            </div>
            <div className="flex items-center gap-1.5 rounded border border-base-750 bg-base-900/80 px-2 py-0.5">
              <span className="text-slate-400">Partner:</span>
              <span className="text-tech-300 font-medium">Waterways Ireland</span>
            </div>
            <div className="flex items-center gap-1.5 rounded border border-base-750 bg-base-900/80 px-2 py-0.5">
              <span className="text-slate-400">Incubator:</span>
              <span className="text-gold-400">Dogpatch Labs</span>
            </div>
          </div>
        </div>

        <div className="mt-1 flex items-center justify-between text-[10px] text-slate-400">
          <span className="text-slate-400">Dual Motor Propulsion</span>
          <span className="text-market-400">Surface Debris Harvest: Active</span>
        </div>
      </div>
    );
  }

  // kind === 'ml'
  return (
    <div className="relative h-44 w-full overflow-hidden rounded-xl border border-base-750 bg-base-950/80 p-3 font-mono">
      <div className="flex items-center justify-between border-b border-base-800 pb-2 text-[10px] text-slate-400">
        <div className="flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-gold-400" />
          <span className="text-slate-300">MULTIVARIATE_REGRESSION_MODEL</span>
        </div>
        <span className="text-gold-400 font-semibold">BT Young Scientist</span>
      </div>

      {/* Regression Scatter Graphic */}
      <div className="relative mt-2 h-24 w-full">
        <svg className="h-full w-full" viewBox="0 0 300 90">
          {/* Axis */}
          <line x1="25" y1="10" x2="25" y2="80" stroke="#334155" strokeWidth="1" />
          <line x1="25" y1="80" x2="290" y2="80" stroke="#334155" strokeWidth="1" />

          {/* Regression Line */}
          <line x1="30" y1="75" x2="280" y2="18" stroke="#38bdf8" strokeWidth="2" strokeDasharray="4 2" />

          {/* Scatter Points */}
          <circle cx="50" cy="72" r="2.5" fill="#f59e0b" opacity="0.8" />
          <circle cx="70" cy="65" r="2.5" fill="#f59e0b" opacity="0.8" />
          <circle cx="95" cy="58" r="2.5" fill="#f59e0b" opacity="0.8" />
          <circle cx="110" cy="63" r="2.5" fill="#f59e0b" opacity="0.8" />
          <circle cx="140" cy="48" r="2.5" fill="#f59e0b" opacity="0.8" />
          <circle cx="170" cy="40" r="2.5" fill="#f59e0b" opacity="0.8" />
          <circle cx="195" cy="35" r="2.5" fill="#f59e0b" opacity="0.8" />
          <circle cx="230" cy="31" r="2.5" fill="#f59e0b" opacity="0.8" />
          <circle cx="260" cy="22" r="2.5" fill="#f59e0b" opacity="0.8" />
          <circle cx="275" cy="20" r="2.5" fill="#f59e0b" opacity="0.8" />

          <text x="210" y="24" fill="#38bdf8" fontSize="8" fontFamily="monospace">Y = βX + ε</text>
        </svg>
      </div>

      <div className="mt-1 flex items-center justify-between text-[10px] text-slate-400">
        <span className="text-slate-400">Physiological &amp; Match Variables</span>
        <span className="text-gold-400">National Exhibition Feature</span>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative px-6 py-24 sm:py-32 bg-dot-pattern">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          label="02 / Featured Work"
          title="Engineering & Quantitative Projects"
          subtitle="Things I've built across algorithmic market execution, AI/ML tooling, and autonomous robotics."
          badge="Live Repos & Pilots"
        />

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.id}
              className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-base-750 bg-base-900/80 p-6 sm:p-7 backdrop-blur-md transition-all duration-300 hover:-translate-y-1.5 hover:border-market-500/40 hover:bg-base-850 hover:shadow-2xl hover:shadow-market-500/10"
            >
              <div>
                {/* Header row: category + metric badge */}
                <div className="mb-4 flex items-center justify-between">
                  <span className="rounded-full border border-market-500/30 bg-market-500/10 px-2.5 py-0.5 font-mono text-xs font-semibold text-market-300">
                    {project.category}
                  </span>

                  <div className="flex items-center gap-1.5 font-mono text-xs text-slate-400">
                    <span className="font-semibold text-white">{project.metric}</span>
                    <span className="text-[11px] text-slate-500">· {project.metricLabel}</span>
                  </div>
                </div>

                {/* Project Graphic Visualization */}
                <div className="mb-5">
                  <ProjectGraphic kind={project.graphicKind} />
                </div>

                {/* Title and Subtitle */}
                <h3 className="text-xl font-bold tracking-tight text-white transition-colors group-hover:text-market-200">
                  {project.title}
                </h3>
                <p className="mt-1 font-mono text-xs text-tech-300">
                  {project.subtitle}
                </p>

                {/* Summary */}
                <p className="mt-3 text-xs leading-relaxed text-slate-300 sm:text-sm">
                  {project.summary}
                </p>

                {/* Tech Pills */}
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md border border-base-750 bg-base-950/70 px-2 py-0.5 font-mono text-[11px] text-slate-300 transition-colors group-hover:border-base-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-6 flex items-center justify-between border-t border-base-800 pt-4">
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-lg border border-market-500/30 bg-market-500/10 px-3 py-1.5 text-xs font-medium text-market-300 transition-all duration-200 hover:border-market-400 hover:bg-market-400 hover:text-base-950 hover:shadow-sm"
                >
                  <span>{project.demoLabel}</span>
                  <ArrowUpRight size={13} />
                </a>

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-400 transition-colors hover:text-white"
                >
                  <Github size={14} />
                  <span>Repository</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
