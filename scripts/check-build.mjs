import assert from 'node:assert/strict';
import {existsSync, readdirSync, readFileSync, statSync} from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';

// Inspect the generated static site, including assets that Docusaurus link
// validation does not check. No server, network or extra dependency is needed.
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const build = path.join(root, 'build');
assert(existsSync(path.join(build, 'index.html')), 'Run npm run build first.');
const attributes = (tag) => Object.fromEntries(
  [...tag.matchAll(/([\w:-]+)="([^"]*)"/g)].map((match) => [match[1], match[2]]),
);
const home = readFileSync(path.join(build, 'index.html'), 'utf8');
const canonical = [...home.matchAll(/<link\b[^>]*>/g)]
  .map(([tag]) => attributes(tag)).find((attrs) => attrs.rel === 'canonical');
assert(canonical?.href, 'The homepage must expose its canonical URL.');
const site = new URL(canonical.href);
const basePath = site.pathname.endsWith('/') ? site.pathname : `${site.pathname}/`;
const errors = [];
let pages = 0;
let references = 0;
function walk(directory) {
  return readdirSync(directory, {withFileTypes: true}).flatMap((entry) => {
    const file = path.join(directory, entry.name);
    return entry.isDirectory() ? walk(file) : file.endsWith('.html') ? [file] : [];
  });
}
for (const file of walk(build)) {
  pages += 1;
  const relative = path.relative(build, file).split(path.sep).join('/');
  const pageUrl = new URL(relative.replace(/index\.html$/, ''), site);
  const html = readFileSync(file, 'utf8');
  if (relative === 'index.html' || relative.startsWith('docs/')) {
    const count = [...html.matchAll(/<h1\b/g)].length;
    if (count !== 1) errors.push(`${relative}: expected one h1, found ${count}`);
  }
  for (const [tag] of html.matchAll(/<(?:a|img|script|link)\b[^>]*>/g)) {
    const attrs = attributes(tag);
    if (tag.startsWith('<img') && !Object.hasOwn(attrs, 'alt')) errors.push(`${relative}: image missing alt text`);
    const value = attrs.src ?? attrs.href;
    if (!value || /^(?:mailto:|tel:|data:|javascript:|#)/.test(value)) continue;
    const url = new URL(value.replaceAll('&amp;', '&'), pageUrl);
    if (url.origin !== site.origin) continue;
    if (!url.pathname.startsWith(basePath)) {
      errors.push(`${relative}: URL escapes baseUrl: ${value}`);
      continue;
    }
    const target = path.resolve(build, decodeURIComponent(url.pathname.slice(basePath.length)));
    if (target !== build && !target.startsWith(`${build}${path.sep}`)) {
      errors.push(`${relative}: URL escapes build: ${value}`);
      continue;
    }
    const candidates = [target, `${target}.html`, path.join(target, 'index.html')];
    if (!candidates.some((candidate) => existsSync(candidate) && statSync(candidate).isFile())) {
      errors.push(`${relative}: missing local target ${value}`);
    }
    references += 1;
  }
}
assert.equal(errors.length, 0, errors.join('\n'));
console.log(`Checked ${pages} HTML pages and ${references} local references: assets, routes, baseUrl, image alt attributes and primary headings passed.`);
