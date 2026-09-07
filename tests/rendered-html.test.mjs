import assert from "node:assert/strict";
import { access } from "node:fs/promises";
import test from "node:test";

async function render(path = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);
  return worker.fetch(new Request(`http://localhost${path}`, { headers: { accept: "text/html" } }), { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } }, { waitUntil() {}, passThroughOnException() {} });
}

test("renders the wide-baseline product story", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /Stereogrammy — Turn movement into depth/);
  assert.match(html, /The world is/);
  assert.match(html, /Clouds aren’t a backdrop/);
  assert.match(html, /stereo-clouds-low\.jpg/);
  assert.match(html, /scroll-depth/);
  assert.doesNotMatch(html, /codex-preview|Building your site/);
});

test("ships every photographic stereo example", async () => {
  for (const name of ["stereo-clouds-low.jpg", "stereo-clouds-high.png", "stereo-islands.png", "stereo-golf.png", "stereo-airport.png"]) await access(new URL(`../public/${name}`, import.meta.url));
});
