type ProjectKpi = {
  value: string;
  label: string;
  detail?: string;
};

export function ProjectKpiStrip({
  items,
  label,
}: {
  items: readonly ProjectKpi[];
  label: string;
}) {
  return (
    <dl className="project-kpi-strip" aria-label={label}>
      {items.map((item) => (
        <div key={item.label}>
          <dt>{item.label}</dt>
          <dd>{item.value}</dd>
          {item.detail ? <p>{item.detail}</p> : null}
        </div>
      ))}
    </dl>
  );
}
