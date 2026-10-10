import Link from "next/link";

export function Brand({ href = "/" }: { href?: string }) {
  return (
    <Link className="brand" href={href} aria-label="KIELSPACE Startseite">
      <img
        src="/images/kielspace-logo-master.png"
        alt="KIELSPACE – Self Storage Kiel"
      />
    </Link>
  );
}
