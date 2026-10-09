import Link from "next/link";

export function Brand({ href = "/" }: { href?: string }) {
  return (
    <Link className="brand" href={href} aria-label="KIELSPACE Startseite">
      KIEL<span>SPACE</span>
      <small>SELF STORAGE KIEL</small>
    </Link>
  );
}
