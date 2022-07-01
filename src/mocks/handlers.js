import lecturesHandler from './handlers/lecturesHandler/handler';
import lectureDetailHandler from './handlers/lectureDetailHandler/handler';
import createReviewHandler from './handlers/createReview/handler';
import adminUsersHandler from './handlers/adminUsers/handler';

export const handlers = [
  ...lecturesHandler,
  ...lectureDetailHandler,
  ...createReviewHandler,
  ...adminUsersHandler,
];
