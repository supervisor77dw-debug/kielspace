"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import {
  createSessionToken,
  SESSION_COOKIE_NAME,
  sessionCookieOptions,
} from "@/lib/auth/session";
import { authenticateProjectUser } from "@/lib/auth/users";

export type LoginState = {
  error: string;
};

export async function login(
  _previousState: LoginState,
  formData: FormData,
): Promise<LoginState> {
  const username = formData.get("username");
  const password = formData.get("password");
  if (typeof username !== "string" || typeof password !== "string") {
    return { error: "Bitte gib Benutzername und Passwort ein." };
  }

  let projectUser;
  try {
    projectUser = authenticateProjectUser(username, password);
  } catch (error) {
    console.error("Project access is not configured correctly.", error);
    return {
      error: "Der Projektzugang ist derzeit nicht konfiguriert.",
    };
  }

  if (!projectUser) {
    return { error: "Benutzername oder Passwort ist nicht korrekt." };
  }

  const cookieStore = await cookies();
  cookieStore.set(
    SESSION_COOKIE_NAME,
    createSessionToken(projectUser.username, projectUser.role),
    sessionCookieOptions,
  );
  redirect("/projekt");
}
