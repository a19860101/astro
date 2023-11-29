import * as adapter from '@astrojs/netlify/netlify-functions.js';
import { renderers } from './renderers.mjs';
import { manifest } from './manifest_b7827798.mjs';

const _page0  = () => import('./chunks/generic_214fd6f7.mjs');
const _page1  = () => import('./chunks/index_456ce1bb.mjs');
const _page2  = () => import('./chunks/folio-1_a299904e.mjs');
const _page3  = () => import('./chunks/contact_1f4275b9.mjs');
const _page4  = () => import('./chunks/about_3a61a396.mjs');
const _page5  = () => import('./chunks/index_91cb09e1.mjs');
const _page6  = () => import('./chunks/post-1_02a7a6b6.mjs');
const _page7  = () => import('./chunks/post-2_839bd750.mjs');
const _page8  = () => import('./chunks/post-3_757d321e.mjs');
const _page9  = () => import('./chunks/post-4_e152e142.mjs');const pageMap = new Map([["node_modules/astro/dist/assets/endpoint/generic.js", _page0],["src/pages/index.astro", _page1],["src/pages/portfolio/folio-1.html", _page2],["src/pages/contact.html", _page3],["src/pages/about.astro", _page4],["src/pages/blog/index.astro", _page5],["src/pages/blog/post-1.md", _page6],["src/pages/blog/post-2.md", _page7],["src/pages/blog/post-3.md", _page8],["src/pages/blog/post-4.md", _page9]]);
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
