import { rest } from 'msw';
import { firstCategory, secondCategory, thirdCategory } from './response';

export default [
  rest.get('/category', (req, res, ctx) => {
    // 카테고리 검색 API
    // /category?depth=2&parentId=1
    const depth = req.url.searchParams.get('depth');
    const parentId = req.url.searchParams.get('parentId');

    if (depth === '1') {
      return res(ctx.status(200), ctx.json(firstCategory));
    } else if (depth === '2' && parentId) {
      return res(ctx.status(200), ctx.json(secondCategory));
    } else if (depth === '3' && parentId) {
      console.log('parentId: ', parentId);
      return res(ctx.status(200), ctx.json(thirdCategory));
    }

    return req.passthrough();
  }),
];
