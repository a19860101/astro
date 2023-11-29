/* empty css                           */import { f as createComponent, r as renderTemplate, h as renderComponent, u as unescapeHTML } from '../astro_3c25af06.mjs';
import 'clsx';
import { $ as $$MDLayout } from './post-1_9f8d38b7.mjs';

const html = "<h1 id=\"hello\">hello</h1>";

				const frontmatter = {"layout":"../../layouts/MDLayout.astro","title":"測試文章","description":"desc","author":"Zac","pubDate":"20231124"};
				const file = "/Users/zac/Desktop/msi2023/astro/src/pages/blog/post-2.md";
				const url = "/blog/post-2";
				function rawContent() {
					return "# hello\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":1,"slug":"hello","text":"hello"}];
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
