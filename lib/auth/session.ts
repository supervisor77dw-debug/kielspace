import "server-only";

import { createHmac, timingSafeEqual } from "node:crypto";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const SESSION_COOKIE_NAME = "kielspace_project_session";
const SESSION_LIFETIME_SECONDS = 60 * 60 * 8;

type SessionPayload = {
  subject: string;
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

export function createSessionToken() {
  const payload: SessionPayload = {
    subject: "shared-investor-access",
    expiresAt: Math.floor(Date.now() / 1000) + SESSION_LIFETIME_SECONDS,
  };
  const encodedPayload = Buffer.from(JSON.stringify(payload)).toString(
    "base64url",
  );
  return `${encodedPayload}.${sign(encodedPayload)}`;
}

export function verifySessionToken(token: string | undefined) {
  if (!token) return false;

  const [encodedPayload, providedSignature] = token.split(".");
  if (!encodedPayload || !providedSignature) return false;

  const expectedSignature = sign(encodedPayload);
  const provided = Buffer.from(providedSignature);
  const expected = Buffer.from(expectedSignature);
  if (
    provided.length !== expected.length ||
    !timingSafeEqual(provided, expected)
  ) {
    return false;
  }

  try {
    const payload = JSON.parse(
      Buffer.from(encodedPayload, "base64url").toString("utf8"),
    ) as SessionPayload;
    return (
      payload.subject === "shared-investor-access" &&
      payload.expiresAt > Math.floor(Date.now() / 1000)
    );
  } catch {
    return false;
  }
}

export async function requireProjectSession() {
  const cookieStore = await cookies();
  const token = cookieStore.get(SESSION_COOKIE_NAME)?.value;
  if (!verifySessionToken(token)) {
    redirect("/projekt/login");
  }
}

export const sessionCookieOptions = {
  httpOnly: true,
  secure: process.env.NODE_ENV === "production",
  sameSite: "strict" as const,
  path: "/",
  maxAge: SESSION_LIFETIME_SECONDS,
};
