/* empty css                           */import { e as createAstro, f as createComponent, r as renderTemplate, h as renderComponent, m as maybeRenderHead, g as addAttribute } from '../astro_3c25af06.mjs';
import { $ as $$Master } from './about_a4e9d2fc.mjs';
import 'clsx';

const $$Astro$2 = createAstro();
const $$Index$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Index$1;
  const posts = await Astro2.glob(/* #__PURE__ */ Object.assign({"./blog/post-1.md": () => import('./post-1_9f8d38b7.mjs').then(n => n.p),"./blog/post-2.md": () => import('./post-2_4ffe1de9.mjs'),"./blog/post-3.md": () => import('./post-3_68871ad5.mjs'),"./blog/post-4.md": () => import('./post-4_9b75c79c.mjs')}), () => "./blog/*.md");
  return renderTemplate`${renderComponent($$result, "Master", $$Master, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1 class="text-3xl font-bold text-rose-600">Astro</h1> <nav> <a href="/portfolio/folio-1">作品集一</a> <a href="/blog/post-1">post 1</a> <a href="/blog/post-2">post 2</a> <a href="/blog/post-3">post 3</a> </nav> ${posts.map((post) => renderTemplate`<div><a${addAttribute(post.url, "href")}>${post.frontmatter.title}</a></div>`)}` })}`;
}, "/Users/zac/Desktop/msi2023/astro/src/pages/index.astro", void 0);

const $$file$1 = "/Users/zac/Desktop/msi2023/astro/src/pages/index.astro";
const $$url$1 = "";

const index$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index$1,
	file: $$file$1,
	url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$1 = createAstro();
const $$Post = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Post;
  const { title, pubDate, url } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="border border-zinc-700 p-5 w-1/2 mx-auto mb-4"> <h3 class="text-3xl font-bold text-sky-400">${title}</h3> <div>${pubDate}</div> <a${addAttribute(url, "href")}>繼續閱讀</a> </div>`;
}, "/Users/zac/Desktop/msi2023/astro/src/components/Post.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const posts = await Astro2.glob(/* #__PURE__ */ Object.assign({"./post-1.md": () => import('./post-1_9f8d38b7.mjs').then(n => n.p),"./post-2.md": () => import('./post-2_4ffe1de9.mjs'),"./post-3.md": () => import('./post-3_68871ad5.mjs'),"./post-4.md": () => import('./post-4_9b75c79c.mjs')}), () => "./*.md");
  return renderTemplate`${renderComponent($$result, "Master", $$Master, {}, { "default": ($$result2) => renderTemplate`${posts.map(
    (post) => renderTemplate`${renderComponent($$result2, "Post", $$Post, { "title": post.frontmatter.title, "pubDate": post.frontmatter.pubDate, "url": post.url })}`
  )}` })}`;
}, "/Users/zac/Desktop/msi2023/astro/src/pages/blog/index.astro", void 0);

const $$file = "/Users/zac/Desktop/msi2023/astro/src/pages/blog/index.astro";
const $$url = "/blog";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { index as a, index$1 as i };
