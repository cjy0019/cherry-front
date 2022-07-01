import { rest } from 'msw';
import { adminLecturesResponse } from './response';

export default [
  rest.get('/admin/v1/lectures', (req, res, ctx) => {
    // 유저리스트 API
    // /admin/v1/users GET
    // - sort
    // - page
    // - size
    // - searchName
    // - firstCategory

    return res(ctx.status(200), ctx.json(adminLecturesResponse));
  }),
];
