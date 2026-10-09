import "server-only";

import { createHmac, timingSafeEqual } from "node:crypto";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import { projectRoles, type ProjectRole } from "./users";

export const SESSION_COOKIE_NAME = "kielspace_project_session";
const SESSION_LIFETIME_SECONDS = 60 * 60 * 8;

export type ProjectSession = {
  user: string;
  role: ProjectRole;
  expiresAt: number;
};

function getSessionSecret() {
  const secret = process.env.PROJECT_SESSION_SECRET;
  if (!secret || secret.length < 32) {
    throw new Error(
      "PROJECT_SESSION_SECRET must contain at least 32 characters.",
    );
  }
  return secret;
}

function sign(value: string) {
  return createHmac("sha256", getSessionSecret())
    .update(value)
    .digest("base64url");
}

export function createSessionToken(
  user: string,
  role: ProjectRole,
) {
  const payload: ProjectSession = {
    user,
    role,
    expiresAt: Math.floor(Date.now() / 1000) + SESSION_LIFETIME_SECONDS,
  };
  const encodedPayload = Buffer.from(JSON.stringify(payload)).toString(
    "base64url",
  );
  return `${encodedPayload}.${sign(encodedPayload)}`;
}

export function readSessionToken(
  token: string | undefined,
): ProjectSession | null {
  if (!token) return null;

  const [encodedPayload, providedSignature] = token.split(".");
  if (!encodedPayload || !providedSignature) return null;

  const expectedSignature = sign(encodedPayload);
  const provided = Buffer.from(providedSignature);
  const expected = Buffer.from(expectedSignature);
  if (
    provided.length !== expected.length ||
    !timingSafeEqual(provided, expected)
  ) {
    return null;
  }

  try {
    const payload = JSON.parse(
      Buffer.from(encodedPayload, "base64url").toString("utf8"),
    ) as ProjectSession;
    if (
      typeof payload.user !== "string" ||
      payload.user.length === 0 ||
      !projectRoles.includes(payload.role) ||
      typeof payload.expiresAt !== "number" ||
      payload.expiresAt <= Math.floor(Date.now() / 1000)
    ) {
      return null;
    }
    return payload;
  } catch {
    return null;
  }
}

export function verifySessionToken(token: string | undefined) {
  return readSessionToken(token) !== null;
}

export async function requireProjectSession() {
  const cookieStore = await cookies();
  const token = cookieStore.get(SESSION_COOKIE_NAME)?.value;
  const session = readSessionToken(token);
  if (!session) {
    redirect("/projekt/login");
  }
  return session;
}

export const sessionCookieOptions = {
  httpOnly: true,
  secure: process.env.NODE_ENV === "production",
  sameSite: "strict" as const,
  path: "/",
  maxAge: SESSION_LIFETIME_SECONDS,
};
