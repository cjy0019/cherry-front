import { rest } from 'msw';
import { createReviewResponse } from './response';
export default [
  rest.post('/lectures/:lectureId/review', (req, res, ctx) => {
    // 리뷰 생성 API
    // /lectures/22/review Post
    const { lectureId } = req.params;
    if (lectureId) {
      if (
        req.body.recommendation &&
        req.body.costPerformance &&
        req.body.rating &&
        req.body.oneLineComment &&
        req.body.strengthComment &&
        req.body.weaknessComment
      ) {
        return res(ctx.status(200), ctx.json(createReviewResponse));
      } else return res(ctx.status(400), ctx.json({ message: 'bad request' }));
    }
  }),
];
