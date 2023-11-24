import * as adapter from '@astrojs/netlify/netlify-functions.js';
import { renderers } from './renderers.mjs';
import { manifest } from './manifest_e4eb1b9a.mjs';

const _page0  = () => import('./chunks/generic_bee25223.mjs');
const _page1  = () => import('./chunks/index_5b990a30.mjs');
const _page2  = () => import('./chunks/folio-1_1df8e5d1.mjs');
const _page3  = () => import('./chunks/contact_bf3a969c.mjs');
const _page4  = () => import('./chunks/about_d5f12d52.mjs');
const _page5  = () => import('./chunks/post-1_5b424b1a.mjs');
const _page6  = () => import('./chunks/post-2_e0ea621b.mjs');const pageMap = new Map([["node_modules/astro/dist/assets/endpoint/generic.js", _page0],["src/pages/index.astro", _page1],["src/pages/portfolio/folio-1.html", _page2],["src/pages/contact.html", _page3],["src/pages/about.astro", _page4],["src/pages/blog/post-1.md", _page5],["src/pages/blog/post-2.html", _page6]]);
const _manifest = Object.assign(manifest, {
	pageMap,
	renderers,
});
const _args = {};

const _exports = adapter.createExports(_manifest, _args);
const handler = _exports['handler'];

const _start = 'start';
if(_start in adapter) {
	adapter[_start](_manifest, _args);
}

export { handler, pageMap };
