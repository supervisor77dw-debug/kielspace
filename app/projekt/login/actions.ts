"use server";

import { timingSafeEqual } from "node:crypto";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import {
  createSessionToken,
  SESSION_COOKIE_NAME,
  sessionCookieOptions,
} from "@/lib/auth/session";

export type LoginState = {
  error: string;
};

function secureTextEqual(value: string, expected: string) {
  const valueBuffer = Buffer.from(value);
  const expectedBuffer = Buffer.from(expected);
  return (
    valueBuffer.length === expectedBuffer.length &&
    timingSafeEqual(valueBuffer, expectedBuffer)
  );
}

export async function login(
  _previousState: LoginState,
  formData: FormData,
): Promise<LoginState> {
  const configuredPassword = process.env.PROJECT_ACCESS_PASSWORD;
  if (!configuredPassword) {
    console.error("PROJECT_ACCESS_PASSWORD is not configured.");
    return {
      error: "Der Projektzugang ist derzeit nicht konfiguriert.",
    };
  }

  const password = formData.get("password");
  if (
    typeof password !== "string" ||
    !secureTextEqual(password, configuredPassword)
  ) {
    return { error: "Das eingegebene Passwort ist nicht korrekt." };
  }

  const cookieStore = await cookies();
  cookieStore.set(
    SESSION_COOKIE_NAME,
    createSessionToken(),
    sessionCookieOptions,
  );
  redirect("/projekt");
}
