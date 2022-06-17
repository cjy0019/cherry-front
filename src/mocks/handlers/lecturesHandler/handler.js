import { rest } from 'msw';
import { search, hotSix } from './response';

export default [
  rest.get('/lectures', (req, res, ctx) => {
    // 강의 검색 API
    // /lectures?sort=reviewCount&page=1&size=1searchName=javascript
    const sort = req.url.searchParams.get('sort');
    const page = req.url.searchParams.get('page');
    const size = req.url.searchParams.get('size');
    const searName = req.url.searchParams.get('searchName');

    if (sort && page && size && searName) {
      return res(ctx.status(200), ctx.json(search));
    }

    //** */

    // Hot6 조회 API(기능설명)
    // /lectures?sort=reviewCount&page=1&size=1&depth=javascript&categoryId=1
    const depth = req.url.searchParams.get('depth');
    const categoryId = req.url.searchParams.get('categoryId');

    if (sort && page && size && depth && categoryId) {
      return res(ctx.status(200), ctx.json(hotSix));
    }

    return req.passthrough();
  }),
];
