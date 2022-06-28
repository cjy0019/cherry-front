import { rest } from 'msw';
import { suggestReview } from './response';

export default [
  rest.get('/reviews', (req, res, ctx) => {
    // 메인페이지 중간 정보 리뷰 API

    return res(ctx.status(200), ctx.json(suggestReview));
  }),
];
