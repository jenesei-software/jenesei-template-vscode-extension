import type { ExampleSnapshot } from "../../services/exampleService";
import { escapeHtml } from "../../util/strings";

export function renderPanel(snapshot: ExampleSnapshot | undefined): string {
  const items = snapshot?.items ?? [];
  const rows = items.length
    ? items.map((item) => `<li>${escapeHtml(item)}</li>`).join("")
    : `<li class="muted">${escapeHtml("No items.")}</li>`;

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<style>
  body {
    font-family: var(--vscode-font-family);
    color: var(--vscode-foreground);
    padding: 8px;
  }
  ul { list-style: none; padding: 0; margin: 0; }
  li { padding: 4px 0; }
  .muted { opacity: 0.7; }
</style>
</head>
<body>
  <ul>${rows}</ul>
</body>
</html>`;
}
