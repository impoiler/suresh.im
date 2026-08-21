import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

const read = (path) => readFileSync(new URL(`../${path}`, import.meta.url), "utf8");

test("404 recovery page provides agent discovery links", () => {
  const page = read("src/app/not-found.tsx");
  for (const path of ["/sitemap.xml", "/llms.txt", "/about", "/projects", "/blog"])
    assert.match(page, new RegExp(path.replace(".", "\\.")));
});

test("homepage has a meaningful heading hierarchy", () => {
  const page = read("src/app/page.tsx");
  assert.match(page, /<h1/);
  assert.equal((page.match(/<h2/g) ?? []).length, 2);
});

test("negotiated routes vary on Accept and compression", () => {
  const proxy = read("src/proxy.ts");
  assert.match(proxy, /Vary", "Accept"/);
  for (const route of ["route.ts", "about/route.ts", "projects/route.ts", "contact/route.ts", "privacy/route.ts"])
    assert.match(read(`src/app/md/${route}`), /Vary: "Accept, Accept-Encoding"/);
});

test("agent instructions contain specific use and calling guidance", () => {
  const llms = read("public/llms.txt");
  assert.match(llms, /## When to use this site/);
  assert.match(llms, /Accept: text\/markdown/);
  assert.match(llms, /mailto:hello@suresh\.im/);
});

test("metadata, organization schema, and privacy trust anchor are complete", () => {
  const layout = read("src/app/layout.tsx");
  for (const signal of ['type: "website"', "contactPoint", '"@type": "PostalAddress"']) assert.match(layout, new RegExp(signal));
  assert.match(read("src/app/sitemap.ts"), /\/privacy/);
  assert.ok(read("src/app/privacy/page.tsx").length > 2000);
});
