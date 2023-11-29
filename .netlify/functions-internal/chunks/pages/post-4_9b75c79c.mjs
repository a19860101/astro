/* empty css                           */import { f as createComponent, r as renderTemplate, h as renderComponent, u as unescapeHTML } from '../astro_3c25af06.mjs';
import 'clsx';
import { $ as $$MDLayout } from './post-1_9f8d38b7.mjs';

const html = "<h1 id=\"我是文章四\">我是文章四</h1>";

				const frontmatter = {"layout":"../../layouts/MDLayout.astro","title":"test 4","pubDate":"20231127"};
				const file = "/Users/zac/Desktop/msi2023/astro/src/pages/blog/post-4.md";
				const url = "/blog/post-4";
				function rawContent() {
					return "# 我是文章四";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":1,"slug":"我是文章四","text":"我是文章四"}];
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

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
