import { Book } from "../book-interface";

export const BOOK_FIXTURE:Book = {
  title: 'TITLE',
  subtitle: 'SUBTITLE',
  isbn: 'ISBN',
  abstract: 'ABSTRACT',
  numPages: 999,
  author: 'AUTHOR',
  publisher: {
    name: 'PUB_NAME',
    url: 'PUB_URL',
  },
};

export const BOOK_LIST_FIXTURE:Book[] = [{
  title: 'TITLE 1',
  subtitle: 'SUBTITLE 1',
  isbn: 'ISBN_1',
  abstract: 'ABSTRACT 1',
  numPages: 9991,
  author: 'AUTHOR 1',
  publisher: {
    name: 'PUB_NAME 1',
    url: 'PUB_URL 1',
  },
}, {
  title: 'TITLE 2',
  subtitle: 'SUBTITLE 2',
  isbn: 'ISBN_2',
  abstract: 'ABSTRACT 2',
  numPages: 9992,
  author: 'AUTHOR 2',
  publisher: {
    name: 'PUB_NAME 2',
    url: 'PUB_URL 2',
  },
}, {
  title: 'TITLE 3',
  subtitle: 'SUBTITLE 3',
  isbn: 'ISBN_3',
  abstract: 'ABSTRACT 3',
  numPages: 9993,
  author: 'AUTHOR 3',
  publisher: {
    name: 'PUB_NAME 3',
    url: 'PUB_URL 3',
  },
}];
