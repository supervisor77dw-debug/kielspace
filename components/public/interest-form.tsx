"use client";

import { FormEvent, useState } from "react";

type FormStatus =
  | { kind: "idle"; message: "" }
  | { kind: "sending"; message: string }
  | { kind: "success"; message: string }
  | { kind: "error"; message: string };

export function InterestForm() {
  const [status, setStatus] = useState<FormStatus>({
    kind: "idle",
    message: "",
  });

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus({ kind: "sending", message: "Anfrage wird übermittelt …" });

    const form = event.currentTarget;
    const response = await fetch("/api/interest", {
      method: "POST",
      body: new FormData(form),
    });
    const result = (await response.json()) as { message: string };

    if (!response.ok) {
      setStatus({ kind: "error", message: result.message });
      return;
    }

    form.reset();
    setStatus({ kind: "success", message: result.message });
  }

  return (
    <form className="interest-form" onSubmit={handleSubmit}>
      <div className="field-grid">
        <label>
          Vorname
          <input name="firstName" autoComplete="given-name" required />
        </label>
        <label>
          Nachname
          <input name="lastName" autoComplete="family-name" required />
        </label>
        <label>
          E-Mail
          <input name="email" type="email" autoComplete="email" required />
        </label>
        <label>
          Telefonnummer <span>(optional)</span>
          <input name="phone" type="tel" autoComplete="tel" />
        </label>
        <label>
          Ungefähr gewünschte Lagergröße
          <select name="storageSize" required defaultValue="">
            <option value="" disabled>
              Bitte auswählen
            </option>
            <option value="up-to-3">bis 3 m²</option>
            <option value="3-to-5">3–5 m²</option>
            <option value="5-to-10">5–10 m²</option>
            <option value="10-to-15">10–15 m²</option>
            <option value="over-15">mehr als 15 m²</option>
            <option value="unclear">noch unklar</option>
          </select>
        </label>
        <label>
          Gewünschter Zeitraum
          <select name="timeframe" required defaultValue="">
            <option value="" disabled>
              Bitte auswählen
            </option>
            <option value="soon">möglichst bald</option>
            <option value="within-3-months">innerhalb 3 Monaten</option>
            <option value="within-6-months">innerhalb 6 Monaten</option>
            <option value="later">später / nur interessiert</option>
          </select>
        </label>
      </div>
      <label className="privacy-check">
        <input name="privacyAccepted" type="checkbox" value="accepted" required />
        <span>
          Ich stimme der Verarbeitung meiner Angaben zur unverbindlichen
          Kontaktaufnahme zu.
        </span>
      </label>
      <div className="form-footer">
        <button className="button button-primary" disabled={status.kind === "sending"}>
          Unverbindlich vormerken
        </button>
        {status.message ? (
          <p className={`form-status ${status.kind}`} role="status">
            {status.message}
          </p>
        ) : null}
      </div>
    </form>
  );
}
