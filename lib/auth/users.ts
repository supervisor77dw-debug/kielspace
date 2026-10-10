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

const externalRoleLabels: Partial<Record<ProjectRole, string>> = {
  investor: "Investor",
  bank: "Bank / Prüfung",
};

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

function parseConfiguredUsers(
  variableName: "PROJECT_ACCESS_USERS" | "PROJECT_EXTERNAL_ACCESS_USERS",
  required: boolean,
) {
  const configuredUsers = process.env[variableName];
  if (!configuredUsers) {
    if (required) {
      throw new Error(`${variableName} is not configured.`);
    }
    return [];
  }

  let parsed: unknown;
  try {
    parsed = JSON.parse(configuredUsers);
  } catch {
    throw new Error(`${variableName} must contain valid JSON.`);
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
      `${variableName} must contain users with username, password, and a supported role.`,
    );
  }

  return parsed;
}

function getConfiguredUsers() {
  const users = [
    ...parseConfiguredUsers("PROJECT_ACCESS_USERS", true),
    ...parseConfiguredUsers("PROJECT_EXTERNAL_ACCESS_USERS", false),
  ];
  const normalizedUsernames = users.map((user) =>
    user.username.toLocaleLowerCase("de-DE"),
  );
  if (new Set(normalizedUsernames).size !== normalizedUsernames.length) {
    throw new Error("Configured project users contain duplicate usernames.");
  }

  return users;
}

export function getExternalRoleLabel(role: ProjectRole) {
  return externalRoleLabels[role] ?? null;
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
