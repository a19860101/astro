export { renderers } from '../renderers.mjs';
export { onRequest } from '../_empty-middleware.mjs';

const page = () => import('./pages/about_a4e9d2fc.mjs').then(n => n.a);

export { page };
