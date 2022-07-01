import lecturesHandler from './handlers/lecturesHandler/handler';
import suggestReviewHandler from './handlers/suggestReviewHandler/handler';
import categoryHandler from './handlers/category/handler';
import lectureDetailHandler from './handlers/lectureDetailHandler/handler';
import createReviewHandler from './handlers/createReview/handler';
import adminUsersHandler from './handlers/adminUsers/handler';
import adminLectureHandler from './handlers/adminLectures/handler';

export const handlers = [
  ...lecturesHandler,
  ...suggestReviewHandler,
  ...categoryHandler,
  ...lectureDetailHandler,
  ...createReviewHandler,
  ...adminUsersHandler,
  ...adminLectureHandler,
];
