import assert from "node:assert/strict";
import { test } from "node:test";
import { escapeHtml } from "../util/strings";

test("escapeHtml escapes markup and quotes", () => {
  assert.equal(
    escapeHtml("<a href=\"x\" title='y'>&"),
    "&lt;a href=&quot;x&quot; title=&#39;y&#39;&gt;&amp;",
  );
});
