export type ContentSection = {
  title: string;
  paragraphs: readonly string[];
};

export type ProjectStatusKind =
  | "complete"
  | "in_progress"
  | "review"
  | "awaiting"
  | "next";

export type ProjectStatusItem = {
  area: string;
  status: ProjectStatusKind;
  label: string;
  detail: string;
  updatedAt: string;
};
