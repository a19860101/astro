export { renderers } from '../renderers.mjs';
export { onRequest } from '../_empty-middleware.mjs';

const page = () => import('./pages/post-1_9f8d38b7.mjs').then(n => n.p);

export { page };
