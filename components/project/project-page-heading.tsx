export function ProjectPageHeading({
  eyebrow,
  title,
  introduction,
}: {
  eyebrow: string;
  title: string;
  introduction: string;
}) {
  return (
    <header className="project-page-heading">
      <p className="eyebrow dark">{eyebrow}</p>
      <h1>{title}</h1>
      <p>{introduction}</p>
    </header>
  );
}
