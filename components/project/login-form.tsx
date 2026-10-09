"use client";

import { useActionState } from "react";

import { login, type LoginState } from "@/app/projekt/login/actions";

const initialState: LoginState = { error: "" };

export function LoginForm() {
  const [state, formAction, pending] = useActionState(login, initialState);

  return (
    <form className="login-form" action={formAction}>
      <label>
        Benutzername
        <input
          name="username"
          autoComplete="username"
          required
          autoFocus
        />
      </label>
      <label>
        Projektpasswort
        <input
          name="password"
          type="password"
          autoComplete="current-password"
          required
        />
      </label>
      {state.error ? (
        <p className="login-error" role="alert">
          {state.error}
        </p>
      ) : null}
      <button className="button button-primary" disabled={pending}>
        {pending ? "Zugang wird geprüft …" : "Projektbereich öffnen"}
      </button>
    </form>
  );
}
