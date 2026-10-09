import "server-only";

import type { InterestSubmission } from "./types";

export class LeadProviderNotConfiguredError extends Error {
  constructor() {
    super("Lead provider is not configured.");
    this.name = "LeadProviderNotConfiguredError";
  }
}

export async function submitInterestLead(submission: InterestSubmission) {
  const endpoint = process.env.LEAD_WEBHOOK_URL;
  if (!endpoint) {
    throw new LeadProviderNotConfiguredError();
  }

  const headers: HeadersInit = {
    "Content-Type": "application/json",
  };
  if (process.env.LEAD_WEBHOOK_TOKEN) {
    headers.Authorization = `Bearer ${process.env.LEAD_WEBHOOK_TOKEN}`;
  }

  const response = await fetch(endpoint, {
    method: "POST",
    headers,
    body: JSON.stringify(submission),
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error(`Lead provider returned HTTP ${response.status}.`);
  }
}
