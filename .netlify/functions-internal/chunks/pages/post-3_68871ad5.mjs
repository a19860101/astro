/* empty css                           */import { f as createComponent, r as renderTemplate, h as renderComponent, u as unescapeHTML } from '../astro_3c25af06.mjs';
import 'clsx';
import { $ as $$MDLayout } from './post-1_9f8d38b7.mjs';

const html = "<h1 id=\"post-3\">post 3</h1>\n<p>hello</p>";

				const frontmatter = {"layout":"../../layouts/MDLayout.astro","title":"test 3","pubDate":"20231125"};
				const file = "/Users/zac/Desktop/msi2023/astro/src/pages/blog/post-3.md";
				const url = "/blog/post-3";
				function rawContent() {
					return "\n# post 3\nhello";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":1,"slug":"post-3","text":"post 3"}];
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
