import { NextResponse } from "next/server";

import {
  LeadProviderNotConfiguredError,
  submitInterestLead,
} from "@/lib/leads/provider";
import type { InterestSubmission } from "@/lib/leads/types";

const allowedStorageSizes = new Set([
  "up-to-3",
  "3-to-5",
  "5-to-10",
  "10-to-15",
  "over-15",
  "unclear",
]);
const allowedTimeframes = new Set([
  "soon",
  "within-3-months",
  "within-6-months",
  "later",
]);

function readString(formData: FormData, key: string) {
  const value = formData.get(key);
  return typeof value === "string" ? value.trim() : "";
}

export async function POST(request: Request) {
  const formData = await request.formData();
  const firstName = readString(formData, "firstName");
  const lastName = readString(formData, "lastName");
  const email = readString(formData, "email");
  const phone = readString(formData, "phone");
  const storageSize = readString(formData, "storageSize");
  const timeframe = readString(formData, "timeframe");
  const privacyAccepted = readString(formData, "privacyAccepted") === "accepted";

  if (
    !firstName ||
    !lastName ||
    !email ||
    !email.includes("@") ||
    !allowedStorageSizes.has(storageSize) ||
    !allowedTimeframes.has(timeframe) ||
    !privacyAccepted
  ) {
    return NextResponse.json(
      { message: "Bitte prüfe die Pflichtfelder und deine Angaben." },
      { status: 400 },
    );
  }

  const submission: InterestSubmission = {
    firstName,
    lastName,
    email,
    phone: phone || undefined,
    storageSize,
    timeframe,
    privacyAccepted: true,
    source: "kielspace-preview",
  };

  try {
    await submitInterestLead(submission);
  } catch (error) {
    if (error instanceof LeadProviderNotConfiguredError) {
      return NextResponse.json(
        {
          message:
            "Die digitale Interessentenregistrierung wird derzeit vorbereitet. Bitte versuche es später erneut.",
        },
        { status: 503 },
      );
    }
    console.error("Interest submission failed.", error);
    return NextResponse.json(
      {
        message:
          "Die Anfrage konnte nicht übermittelt werden. Bitte versuche es später erneut.",
      },
      { status: 502 },
    );
  }

  return NextResponse.json({
    message:
      "Vielen Dank. Wir melden uns, sobald es Neuigkeiten zu KIELSPACE gibt.",
  });
}
