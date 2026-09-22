type Props = {
  label: string;
  title: string;
  subtitle?: string;
  badge?: string;
};

export default function SectionHeading({ label, title, subtitle, badge }: Props) {
  return (
    <div className="mb-12 sm:mb-16">
      <div className="flex items-center gap-3">
        <span className="font-mono text-xs font-semibold tracking-wider uppercase text-market-400">
          {label}
        </span>
        {badge && (
          <span className="rounded-full border border-tech-500/30 bg-tech-500/10 px-2.5 py-0.5 font-mono text-[11px] text-tech-300">
            {badge}
          </span>
        )}
      </div>
      <h2 className="mt-2 text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 max-w-2xl text-sm text-slate-400 sm:text-base leading-relaxed">
          {subtitle}
        </p>
      )}
      <div className="mt-4 flex items-center gap-2">
        <div className="h-0.5 w-12 bg-gradient-to-r from-market-400 to-tech-400" />
        <div className="h-1 w-1 rounded-full bg-tech-400" />
      </div>
    </div>
  );
}
