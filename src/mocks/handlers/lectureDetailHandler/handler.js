import { rest } from 'msw';
import { lectureDetailInfo } from './response';

export default [
  rest.get('/lectures/:lectureId', (req, res, ctx) => {
    // 강의 상세 조회 API
    // /lectures/22 GET
    const { lectureId } = req.params;

    if (lectureId) return res(ctx.status(200), ctx.json(lectureDetailInfo));
    return req.passthrough();
  }),
];
