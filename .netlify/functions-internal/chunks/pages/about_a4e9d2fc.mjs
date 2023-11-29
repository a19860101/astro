/* empty css                           */import { e as createAstro, f as createComponent, r as renderTemplate, m as maybeRenderHead, g as addAttribute, h as renderComponent, i as renderHead, j as renderSlot } from '../astro_3c25af06.mjs';
import 'clsx';
/* empty css                            */
const $$Astro$4 = createAstro();
const $$Nav = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Nav;
  const { logo } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<nav class="w-full py-5 bg-zinc-800 flex px-4"> <a class="text-zinc-100" href="#">${logo}</a> <div class="ml-auto space-x-4"> <a class="text-zinc-100" href="/">Home</a> <a class="text-zinc-100" href="/about">About</a> <a class="text-zinc-100" href="/blog">Blog</a> </div> </nav>`;
}, "/Users/zac/Desktop/msi2023/astro/src/components/Nav.astro", void 0);

const $$Astro$3 = createAstro();
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Header;
  const { myTitle } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<header class="w-full aspect-[21/9]"> <h1>${myTitle}</h1> <img src="/images/cat.jpeg" alt="" class="w-full h-full object-cover"> </header>`;
}, "/Users/zac/Desktop/msi2023/astro/src/components/Header.astro", void 0);

const $$Astro$2 = createAstro();
const $$ViewTransitions = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ViewTransitions;
  const { fallback = "animate", handleForms } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>${handleForms ? renderTemplate`<meta name="astro-view-transitions-forms" content="true">` : ""}`;
}, "/Users/zac/Desktop/msi2023/astro/node_modules/astro/components/ViewTransitions.astro", void 0);

const $$Astro$1 = createAstro();
const $$Master = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Master;
  const { pageTitle } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Zac Site  ${pageTitle && "- " + pageTitle}</title>${renderComponent($$result, "ViewTransitions", $$ViewTransitions, {})}${renderHead()}</head> <body> ${renderComponent($$result, "Nav", $$Nav, { "logo": "\u9023\u6210\u96FB\u8166" })} ${renderComponent($$result, "Header", $$Header, { "myTitle": "Im Zac" })} ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "/Users/zac/Desktop/msi2023/astro/src/layouts/Master.astro", void 0);

const $$Astro = createAstro();
const $$About = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$About;
  return renderTemplate`${renderComponent($$result, "Master", $$Master, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<p>
我是內容
</p> ` })}`;
}, "/Users/zac/Desktop/msi2023/astro/src/pages/about.astro", void 0);

const $$file = "/Users/zac/Desktop/msi2023/astro/src/pages/about.astro";
const $$url = "/about";

const about = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$About,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Master as $, about as a };
