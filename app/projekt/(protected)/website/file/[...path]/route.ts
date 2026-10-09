import { readFile } from "node:fs/promises";
import path from "node:path";

const privateRoot = path.join(process.cwd(), "private", "website");
const allowedFiles = new Set([
  "styles.css",
  "lastenaufzug.css",
  "volume.css",
  "script.js",
  "assets/kielspace-eingang-strassenseite.jpg",
  "assets/kielspace-konzept-anlieferung-v2.png",
  "assets/kielspace-konzept-lagergang.png",
  "assets/kielspace-lastenaufzug-option-1.jpg",
  "assets/kielspace-lastenaufzug-option-2.jpg",
  "assets/kielspace-logo-master.png",
]);

const contentTypes: Record<string, string> = {
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".jpg": "image/jpeg",
  ".png": "image/png",
};

export const dynamic = "force-dynamic";

export async function GET(
  _request: Request,
  context: { params: Promise<{ path: string[] }> },
) {
  const { path: segments } = await context.params;
  const requestedFile = segments.join("/");

  if (!allowedFiles.has(requestedFile)) {
    return new Response("Not found", { status: 404 });
  }

  const extension = path.extname(requestedFile).toLowerCase();
  const contentType = contentTypes[extension];
  if (!contentType) {
    return new Response("Unsupported file type", { status: 415 });
  }

  const content = await readFile(path.join(privateRoot, ...segments));
  return new Response(content, {
    headers: {
      "Cache-Control": "private, no-store, max-age=0",
      "Content-Type": contentType,
      "X-Content-Type-Options": "nosniff",
      "X-Robots-Tag":
        "noindex, nofollow, noarchive, nosnippet, noimageindex",
    },
  });
}
