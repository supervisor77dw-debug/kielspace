import "server-only";

import { timingSafeEqual } from "node:crypto";

export const projectRoles = [
  "owner",
  "editor",
  "investor",
  "bank",
  "partner",
] as const;

export type ProjectRole = (typeof projectRoles)[number];

type ProjectUser = {
  username: string;
  password: string;
  role: ProjectRole;
};

function isProjectRole(value: unknown): value is ProjectRole {
  return (
    typeof value === "string" &&
    projectRoles.includes(value as ProjectRole)
  );
}

function secureTextEqual(value: string, expected: string) {
  const valueBuffer = Buffer.from(value);
  const expectedBuffer = Buffer.from(expected);
  return (
    valueBuffer.length === expectedBuffer.length &&
    timingSafeEqual(valueBuffer, expectedBuffer)
  );
}

function getConfiguredUsers() {
  const configuredUsers = process.env.PROJECT_ACCESS_USERS;
  if (!configuredUsers) {
    throw new Error("PROJECT_ACCESS_USERS is not configured.");
  }

  let parsed: unknown;
  try {
    parsed = JSON.parse(configuredUsers);
  } catch {
    throw new Error("PROJECT_ACCESS_USERS must contain valid JSON.");
  }

  if (
    !Array.isArray(parsed) ||
    parsed.length === 0 ||
    !parsed.every(
      (user): user is ProjectUser =>
        typeof user === "object" &&
        user !== null &&
        typeof user.username === "string" &&
        user.username.length > 0 &&
        typeof user.password === "string" &&
        user.password.length > 0 &&
        isProjectRole(user.role),
    )
  ) {
    throw new Error(
      "PROJECT_ACCESS_USERS must contain users with username, password, and a supported role.",
    );
  }

  const normalizedUsernames = parsed.map((user) =>
    user.username.toLocaleLowerCase("de-DE"),
  );
  if (new Set(normalizedUsernames).size !== normalizedUsernames.length) {
    throw new Error("PROJECT_ACCESS_USERS contains duplicate usernames.");
  }

  return parsed;
}

export function authenticateProjectUser(username: string, password: string) {
  const normalizedUsername = username.trim().toLocaleLowerCase("de-DE");
  const configuredUser = getConfiguredUsers().find(
    (user) =>
      user.username.toLocaleLowerCase("de-DE") === normalizedUsername,
  );

  if (
    !configuredUser ||
    !secureTextEqual(password, configuredUser.password)
  ) {
    return null;
  }

  return {
    username: configuredUser.username,
    role: configuredUser.role,
  };
}
