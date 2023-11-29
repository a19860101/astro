import '@astrojs/internal-helpers/path';
import 'cookie';
import 'kleur/colors';
import 'string-width';
import 'mime';
import './chunks/astro_34f068c2.mjs';
import 'clsx';
import { compile } from 'path-to-regexp';

if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}

new TextEncoder();

function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return toPath;
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    })
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  return {
    ...serializedManifest,
    assets,
    componentMetadata,
    clientDirectives,
    routes
  };
}

const manifest = deserializeManifest({"adapterName":"@astrojs/netlify/functions","routes":[{"file":"index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"portfolio/folio-1/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/portfolio/folio-1","type":"page","pattern":"^\\/portfolio\\/folio-1\\/?$","segments":[[{"content":"portfolio","dynamic":false,"spread":false}],[{"content":"folio-1","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/portfolio/folio-1.html","pathname":"/portfolio/folio-1","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"contact/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/contact","type":"page","pattern":"^\\/contact\\/?$","segments":[[{"content":"contact","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/contact.html","pathname":"/contact","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"about/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/about","type":"page","pattern":"^\\/about\\/?$","segments":[[{"content":"about","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/about.astro","pathname":"/about","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"blog/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/blog","type":"page","pattern":"^\\/blog\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blog/index.astro","pathname":"/blog","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"blog/post-1/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/blog/post-1","type":"page","pattern":"^\\/blog\\/post-1\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}],[{"content":"post-1","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blog/post-1.md","pathname":"/blog/post-1","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"blog/post-2/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/blog/post-2","type":"page","pattern":"^\\/blog\\/post-2\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}],[{"content":"post-2","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blog/post-2.md","pathname":"/blog/post-2","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"blog/post-3/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/blog/post-3","type":"page","pattern":"^\\/blog\\/post-3\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}],[{"content":"post-3","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blog/post-3.md","pathname":"/blog/post-3","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"blog/post-4/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/blog/post-4","type":"page","pattern":"^\\/blog\\/post-4\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}],[{"content":"post-4","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blog/post-4.md","pathname":"/blog/post-4","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/Users/zac/Desktop/msi2023/astro/src/pages/blog/post-1.md",{"propagation":"in-tree","containsHead":true}],["/Users/zac/Desktop/msi2023/astro/src/pages/blog/index.astro",{"propagation":"in-tree","containsHead":true}],["/Users/zac/Desktop/msi2023/astro/src/pages/index.astro",{"propagation":"in-tree","containsHead":true}],["/Users/zac/Desktop/msi2023/astro/src/pages/blog/post-2.md",{"propagation":"in-tree","containsHead":true}],["/Users/zac/Desktop/msi2023/astro/src/pages/blog/post-3.md",{"propagation":"in-tree","containsHead":true}],["/Users/zac/Desktop/msi2023/astro/src/pages/blog/post-4.md",{"propagation":"in-tree","containsHead":true}],["/Users/zac/Desktop/msi2023/astro/src/pages/about.astro",{"propagation":"none","containsHead":true}],["/Users/zac/Desktop/msi2023/astro/src/layouts/MDLayout.astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/blog/post-1@_@md",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/blog/index@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/index@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/blog/post-2@_@md",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/blog/post-3@_@md",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/blog/post-4@_@md",{"propagation":"in-tree","containsHead":false}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var r=(i,c,s)=>{let n=async()=>{await(await i())()},t=new IntersectionObserver(e=>{for(let o of e)if(o.isIntersecting){t.disconnect(),n();break}});for(let e of s.children)t.observe(e)};(self.Astro||(self.Astro={})).visible=r;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000empty-middleware":"_empty-middleware.mjs","/node_modules/astro/dist/assets/endpoint/generic.js":"chunks/pages/generic_fb4f37e4.mjs","\u0000@astrojs-manifest":"manifest_b7827798.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"chunks/generic_214fd6f7.mjs","\u0000@astro-page:src/pages/index@_@astro":"chunks/index_456ce1bb.mjs","\u0000@astro-page:src/pages/portfolio/folio-1@_@html":"chunks/folio-1_a299904e.mjs","\u0000@astro-page:src/pages/contact@_@html":"chunks/contact_1f4275b9.mjs","\u0000@astro-page:src/pages/about@_@astro":"chunks/about_3a61a396.mjs","\u0000@astro-page:src/pages/blog/index@_@astro":"chunks/index_91cb09e1.mjs","\u0000@astro-page:src/pages/blog/post-1@_@md":"chunks/post-1_02a7a6b6.mjs","\u0000@astro-page:src/pages/blog/post-2@_@md":"chunks/post-2_839bd750.mjs","\u0000@astro-page:src/pages/blog/post-3@_@md":"chunks/post-3_757d321e.mjs","\u0000@astro-page:src/pages/blog/post-4@_@md":"chunks/post-4_e152e142.mjs","/astro/hoisted.js?q=0":"_astro/hoisted.10ab386a.js","astro:scripts/before-hydration.js":""},"assets":["/_astro/about.14afe2e7.css","/favicon.svg","/_astro/hoisted.10ab386a.js","/images/cat.jpeg","/index.html","/portfolio/folio-1/index.html","/contact/index.html","/about/index.html","/blog/index.html","/blog/post-1/index.html","/blog/post-2/index.html","/blog/post-3/index.html","/blog/post-4/index.html"]});

export { manifest };
