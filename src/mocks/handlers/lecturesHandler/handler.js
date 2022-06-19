import { rest } from 'msw';
import { search, hotSixBackEnd, hotSixFrontEnd } from './response';

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
    // /lectures?sort=reviewCount&page=1&size=1&depth=1&categoryId=1
    // - sort 항상 reviewCount로 고정(인기순이므로)
    // - page 항상 1로 고정
    // - size 강의 카드 개수 6개
    // - depth depth 항상 1 고정
    // - categoryId 프론트엔드, 백엔드인지 결정, 프론트엔드는 1, 백엔드는 2
    const depth = req.url.searchParams.get('depth');
    const categoryId = req.url.searchParams.get('categoryId');

    if (sort && page && size && depth) {
      if (categoryId === '1') {
        return res(ctx.status(200), ctx.json(hotSixFrontEnd));
      } else if (categoryId === '2') {
        return res(ctx.status(200), ctx.json(hotSixBackEnd));
      }
    }

    return req.passthrough();
  }),
];
