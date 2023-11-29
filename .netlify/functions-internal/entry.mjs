import * as adapter from '@astrojs/netlify/netlify-functions.js';
import { renderers } from './renderers.mjs';
import { manifest } from './manifest_a059e94d.mjs';

const _page0  = () => import('./chunks/generic_214fd6f7.mjs');
const _page1  = () => import('./chunks/index_acfee8f1.mjs');
const _page2  = () => import('./chunks/folio-1_81c79c02.mjs');
const _page3  = () => import('./chunks/contact_a1a37b8c.mjs');
const _page4  = () => import('./chunks/about_0a1edef8.mjs');
const _page5  = () => import('./chunks/index_e84262ef.mjs');
const _page6  = () => import('./chunks/post-1_f4ce75c1.mjs');
const _page7  = () => import('./chunks/post-2_eaa0ba74.mjs');
const _page8  = () => import('./chunks/post-3_c091017b.mjs');
const _page9  = () => import('./chunks/post-4_5e86c2e7.mjs');const pageMap = new Map([["node_modules/astro/dist/assets/endpoint/generic.js", _page0],["src/pages/index.astro", _page1],["src/pages/portfolio/folio-1.html", _page2],["src/pages/contact.html", _page3],["src/pages/about.astro", _page4],["src/pages/blog/index.astro", _page5],["src/pages/blog/post-1.md", _page6],["src/pages/blog/post-2.md", _page7],["src/pages/blog/post-3.md", _page8],["src/pages/blog/post-4.md", _page9]]);
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
