export const userListResponse = {
  content: [
    {
      id: 1,
      email: 'mimiuu2222@gmail.com',
      createdAt: '2022.02.14',
      review: {
        ready: 2,
        approve: 2,
        reject: 4,
      },
      deleteAt: '2022.02.28',
    },
    {
      id: 2,
      email: 'cjy0029@naver.com',
      createdAt: '2022.05.15',
      review: {
        ready: 2,
        approve: 2,
        reject: 4,
      },
      deleteAt: '',
    },
  ],
  pageable: {
    sort: {
      unsorted: false,
      sorted: true,
      empty: false,
    },
    pageNumber: 0,
    pageSize: 6,
    offset: 0,
    unpaged: false,
    paged: true,
  },
  totalPages: 2,
  totalElements: 9,
  last: false,
  numberOfElements: 6,
  size: 6,
  number: 0,
  first: true,
  sort: {
    unsorted: false,
    sorted: true,
    empty: false,
  },
  empty: false,
};
