const pagedProfitsFixtures = {
  emptyPage: {
    content: [],
    pageable: {
      sort: {
        empty: true,
        unsorted: true,
        sorted: false,
      },
      offset: 0,
      pageNumber: 0,
      pageSize: 5,
      paged: true,
      unpaged: false,
    },
    last: true,
    totalPages: 0,
    totalElements: 0,
    size: 5, // Assuming pageSize is 5 for profits
    number: 0,
    sort: {
      empty: true,
      unsorted: true,
      sorted: false,
    },
    numberOfElements: 0,
    first: true,
    empty: true
  },

  onePage: {
    content: [
      { amount: 1234.56, date: "2023-05-15", avgCowHealth: 95.2, numCows: 50 },
      { amount: 876.54, date: "2023-04-28", avgCowHealth: 88.3, numCows: 35 },
      { amount: 2468.1, date: "2023-03-12", avgCowHealth: 92.7, numCows: 42 },
      { amount: 555.55, date: "2023-02-01", avgCowHealth: 98.1, numCows: 60 },
      { amount: 1000.0, date: "2023-01-05", avgCowHealth: 90.0, numCows: 28 },
    ],
    pageable: {
      sort: {
        empty: false,
        unsorted: false,
        sorted: true,
      },
      offset: 0,
      pageNumber: 0,
      pageSize: 5,
      paged: true,
      unpaged: false,
    },
    last: true,
    totalPages: 1,
    totalElements: 5,
    size: 5, // Assuming pageSize is 5 for profits
    number: 0,
    sort: {
      empty: false,
      unsorted: false,
      sorted: true,
    },
    numberOfElements: 5,
    first: true,
    empty: false
  },

  fourPages: [
    { // page 1
      content: [
        { amount: 1234.56, date: "2023-05-15", avgCowHealth: 95.2, numCows: 50 },
        { amount: 876.54, date: "2023-04-28", avgCowHealth: 88.3, numCows: 35 },
        { amount: 2468.1, date: "2023-03-12", avgCowHealth: 92.7, numCows: 42 },
        { amount: 555.55, date: "2023-02-01", avgCowHealth: 98.1, numCows: 60 },
        { amount: 1000.0, date: "2023-01-05", avgCowHealth: 90.0, numCows: 28 },
      ],
      pageable: {
        sort: {
          empty: false,
          unsorted: false,
          sorted: true,
        },
        offset: 0,
        pageNumber: 0,
        pageSize: 5,
        paged: true,
        unpaged: false,
      },
      last: false,
      totalPages: 4,
      totalElements: 20, // Assuming 20 total profits across 4 pages
      size: 5,
      number: 0,
      sort: {
        empty: false,
        unsorted: false,
        sorted: true,
      },
      numberOfElements: 5,
      first: true,
      empty: false
    },

    { // page 2
      content: [
        { amount: 1234.56, date: "2023-05-15", avgCowHealth: 95.2, numCows: 50 },
        { amount: 876.54, date: "2023-04-28", avgCowHealth: 88.3, numCows: 35 },
        { amount: 2468.1, date: "2023-03-12", avgCowHealth: 92.7, numCows: 42 },
        { amount: 555.55, date: "2023-02-01", avgCowHealth: 98.1, numCows: 60 },
        { amount: 1000.0, date: "2023-01-05", avgCowHealth: 90.0, numCows: 28 },
      ],
      pageable: {
        sort: {
          empty: false,
          unsorted: false,
          sorted: true,
        },
        offset: 5,
        pageNumber: 1,
        pageSize: 5,
        paged: true,
        unpaged: false,
      },
      last: false,
      totalPages: 4,
      totalElements: 20,
      size: 5,
      number: 1,
      sort: {
        empty: false,
        unsorted: false,
        sorted: true,
      },
      numberOfElements: 5,
      first: false,
      empty: false
    },

    { // page 3
      content: [
        { amount: 1234.56, date: "2023-05-15", avgCowHealth: 95.2, numCows: 50 },
        { amount: 876.54, date: "2023-04-28", avgCowHealth: 88.3, numCows: 35 },
        { amount: 2468.1, date: "2023-03-12", avgCowHealth: 92.7, numCows: 42 },
        { amount: 555.55, date: "2023-02-01", avgCowHealth: 98.1, numCows: 60 },
        { amount: 1000.0, date: "2023-01-05", avgCowHealth: 90.0, numCows: 28 },
      ],
      pageable: {
        sort: {
          empty: false,
          unsorted: false,
          sorted: true,
        },
        offset: 10,
        pageNumber: 2,
        pageSize: 5,
        paged: true,
        unpaged: false,
      },
      last: false,
      totalPages: 4,
      totalElements: 20,
      size: 5,
      number: 2,
      sort: {
        empty: false,
        unsorted: false,
        sorted: true,
      },
      numberOfElements: 5,
      first: false,
      empty: false
    },

    { // page 4
      content: [
        { amount: 1234.56, date: "2023-05-15", avgCowHealth: 95.2, numCows: 50 },
        { amount: 876.54, date: "2023-04-28", avgCowHealth: 88.3, numCows: 35 },
        { amount: 2468.1, date: "2023-03-12", avgCowHealth: 92.7, numCows: 42 },
        { amount: 555.55, date: "2023-02-01", avgCowHealth: 98.1, numCows: 60 },
        { amount: 1000.0, date: "2023-01-05", avgCowHealth: 90.0, numCows: 28 },
      ],
      pageable: {
        sort: {
          empty: false,
          unsorted: false,
          sorted: true,
        },
        offset: 15,
        pageNumber: 3,
        pageSize: 5,
        paged: true,
        unpaged: false,
      },
      last: true,
      totalPages: 4,
      totalElements: 20,
      size: 5,
      number: 3,
      sort: {
        empty: false,
        unsorted: false,
        sorted: true,
      },
      numberOfElements: 5,
      first: false,
      empty: false
    }

  ],
};

export default pagedProfitsFixtures;
