import lecturesHandler from './handlers/lecturesHandler/handler';
import lectureDetailHandler from './handlers/lectureDetailHandler/handler';

export const handlers = [...lecturesHandler, ...lectureDetailHandler];
