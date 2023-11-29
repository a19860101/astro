/* empty css                           */import { e as createAstro, f as createComponent, r as renderTemplate, h as renderComponent, m as maybeRenderHead, g as addAttribute, l as renderTransition, j as renderSlot, u as unescapeHTML } from '../astro_3c25af06.mjs';
import 'clsx';
import { $ as $$Master } from './about_a4e9d2fc.mjs';
/* empty css                            */
const $$Astro = createAstro();
const $$MDLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$MDLayout;
  const { frontmatter } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Master", $$Master, { "pageTitle": frontmatter.title }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h2>${frontmatter.title}</h2> <div${addAttribute(renderTransition($$result2, "vsssmzft", "slide", ""), "data-astro-transition-scope")}>發布日期${frontmatter.pubDate}</div> ${renderSlot($$result2, $$slots["default"])} <a href="/blog">返回</a> ` })}`;
}, "/Users/zac/Desktop/msi2023/astro/src/layouts/MDLayout.astro", "self");

const html = "<h1 id=\"標題一\">標題一</h1>\n<pre class=\"astro-code github-dark\" style=\"background-color:#24292e;color:#e1e4e8; overflow-x: auto;\" tabindex=\"0\"><code><span class=\"line\"><span style=\"color:#E1E4E8\">&#x3C;</span><span style=\"color:#85E89D\">h1</span><span style=\"color:#E1E4E8\">>test&#x3C;/</span><span style=\"color:#85E89D\">h1</span><span style=\"color:#E1E4E8\">></span></span></code></pre>\n<h2 id=\"標題二\">標題二</h2>\n<p><a href=\"mailto:edit@ltsports.com.tw\">edit@ltsports.com.tw</a> (王維)\n2023年11月24日 週五 下午1:51\n保羅昨天向裁判福斯特爆粗口怒斥，<strong>遭到驅逐出場</strong>。法新社\n保羅昨天向裁判福斯特爆粗口怒斥，遭到驅逐出場。法新社\n美媒曝光保羅（Chris Paul）和福斯特（Scott Foster）場上爭吵全過程。保羅對被吹犯規感到不滿，連續質問，福斯特不耐煩後給他技術犯規，保羅繼續喋喋不休，福斯特將他驅逐出場。</p>\n<p>保羅防守杜蘭特（Kevin Durant）被吹犯規，保羅認為杜蘭特假摔，模仿杜蘭特的動作，而走上罰球線的杜蘭特也在辯解：「怎麽了？我已經移動了。」</p>\n<p>杜蘭特罰球時，保羅還在一旁和福斯特討論這個犯規，「不， 不，不，別TM轉移話題。擋著他的路了嗎？我擋了他的路？那吹的就是狗屎！」</p>\n<p><em><strong>福斯特回應：「那不是狗屎！够了！你够了！」</strong></em></p>\n<p><em>保羅說：「給我滾出這裡！」</em></p>\n<p><strong>福斯特忍無可忍，給了保羅1次技術犯規。很快，保羅的喋喋不休讓他領到第2次技犯被驅逐</strong>\n保羅衝著福斯特放狠話：「我給你準備了東西！」</p>\n<p>福斯特已經怒不可遏，指著保羅大喊：「滾出去！滾出去！」</p>\n<h2 id=\"標題二-1\">標題二</h2>\n<p><a href=\"https://tw.yahoo.com\">link</a></p>";

				const frontmatter = {"layout":"../../layouts/MDLayout.astro","title":"test 1","pubDate":"20231010"};
				const file = "/Users/zac/Desktop/msi2023/astro/src/pages/blog/post-1.md";
				const url = "/blog/post-1";
				function rawContent() {
					return "# 標題一\n\n```html\n<h1>test</h1>\n```\n\n## 標題二\nedit@ltsports.com.tw (王維)\n2023年11月24日 週五 下午1:51\n保羅昨天向裁判福斯特爆粗口怒斥，**遭到驅逐出場**。法新社\n保羅昨天向裁判福斯特爆粗口怒斥，遭到驅逐出場。法新社\n美媒曝光保羅（Chris Paul）和福斯特（Scott Foster）場上爭吵全過程。保羅對被吹犯規感到不滿，連續質問，福斯特不耐煩後給他技術犯規，保羅繼續喋喋不休，福斯特將他驅逐出場。\n\n保羅防守杜蘭特（Kevin Durant）被吹犯規，保羅認為杜蘭特假摔，模仿杜蘭特的動作，而走上罰球線的杜蘭特也在辯解：「怎麽了？我已經移動了。」\n\n杜蘭特罰球時，保羅還在一旁和福斯特討論這個犯規，「不， 不，不，別TM轉移話題。擋著他的路了嗎？我擋了他的路？那吹的就是狗屎！」\n\n***福斯特回應：「那不是狗屎！够了！你够了！」***\n\n*保羅說：「給我滾出這裡！」*\n\n**福斯特忍無可忍，給了保羅1次技術犯規。很快，保羅的喋喋不休讓他領到第2次技犯被驅逐**\n保羅衝著福斯特放狠話：「我給你準備了東西！」\n\n福斯特已經怒不可遏，指著保羅大喊：「滾出去！滾出去！」\n\n## 標題二\n\n[link](https://tw.yahoo.com)";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":1,"slug":"標題一","text":"標題一"},{"depth":2,"slug":"標題二","text":"標題二"},{"depth":2,"slug":"標題二-1","text":"標題二"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${renderComponent(result, 'Layout', $$MDLayout, {
								file,
								url,
								content,
								frontmatter: content,
								headings: getHeadings(),
								rawContent,
								compiledContent,
								'server:root': true,
							}, {
								'default': () => renderTemplate`${unescapeHTML(html)}`
							})}`;
				});

const post1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
   __proto__: null,
   Content,
   compiledContent,
   default: Content,
   file,
   frontmatter,
   getHeadings,
   rawContent,
   url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$MDLayout as $, post1 as p };
