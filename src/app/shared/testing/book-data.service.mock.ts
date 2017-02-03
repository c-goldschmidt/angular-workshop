import { Observable } from 'rxjs';

import { Book } from "../book-interface";
import {BOOK_LIST_FIXTURE, BOOK_FIXTURE} from "./book.fixture";

export class BookDataServiceMock {

  getBooks(): Observable<Book[]> {
    return Observable.of(BOOK_LIST_FIXTURE);
  }

  getBookByISBN(isbn: string): Observable<Book> {
     return Observable.of(BOOK_FIXTURE);
  }

  saveBook (book: Book): Observable<Book> {
    return Observable.of(book);
  }

  addBook (book: Book): Observable<Book> {
    return Observable.of(book);
  }

  deleteBook(isbn: string): Observable<boolean> {
    return Observable.of(true);
  }
}
