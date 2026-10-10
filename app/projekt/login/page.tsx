import Link from "next/link";

import { Brand } from "@/components/brand";
import { LoginForm } from "@/components/project/login-form";

export default function ProjectLoginPage() {
  return (
    <main className="login-page">
      <div className="login-top">
        <Brand />
        <Link href="/">Zur öffentlichen Vorschau</Link>
      </div>
      <section className="login-card">
        <p className="eyebrow dark">GESCHÜTZTER BEREICH</p>
        <h1>Projektzugang</h1>
        <p>
          Geschützter Zugang für Investoren, finanzierende Institute und
          Projektpartner.
        </p>
        <LoginForm />
      </section>
    </main>
  );
}
