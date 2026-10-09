import { readFile } from "node:fs/promises";
import path from "node:path";

const sourcePath = path.join(
  process.cwd(),
  "private",
  "website",
  "index.html",
);

export const dynamic = "force-dynamic";

export async function GET() {
  const source = await readFile(sourcePath, "utf8");
  const html = source
    .replaceAll('href="styles.css"', 'href="/projekt/website/file/styles.css"')
    .replaceAll(
      'href="lastenaufzug.css"',
      'href="/projekt/website/file/lastenaufzug.css"',
    )
    .replaceAll('href="volume.css"', 'href="/projekt/website/file/volume.css"')
    .replaceAll('src="script.js"', 'src="/projekt/website/file/script.js"')
    .replaceAll(
      'src="assets/',
      'src="/projekt/website/file/assets/',
    );

  return new Response(html, {
    headers: {
      "Cache-Control": "private, no-store, max-age=0",
      "Content-Type": "text/html; charset=utf-8",
      "X-Robots-Tag":
        "noindex, nofollow, noarchive, nosnippet, noimageindex",
    },
  });
}
