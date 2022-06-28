import lecturesHandler from './handlers/lecturesHandler/handler';
import suggestReviewHandler from './handlers/suggestReviewHandler/handler';
import categoryHandler from './handlers/category/handler';

export const handlers = [
  ...lecturesHandler,
  ...suggestReviewHandler,
  ...categoryHandler,
];
