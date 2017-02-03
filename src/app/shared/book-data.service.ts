import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

import { Book } from "../shared/book-interface";
import { environment } from "../../environments/environment";

@Injectable()
export class BookDataService {
  private listURL: string = environment.baseUrl + '/books';
  private detailURL: string = environment.baseUrl + '/books/';

  constructor(private http: Http) { }

  getBooks (): Observable<Book[]> {
    return this.http.get(this.listURL).map((resp:Response) => resp.json());
  }

  getBookByISBN (isbn: string): Observable<Book> {
    return this.http.get(this.detailURL + isbn).map((resp:Response) => resp.json());
  }

  saveBook (book: Book): Observable<Book> {
    return this.http.put(this.detailURL + book.isbn, book).map((resp:Response) => resp.json());
  }

  addBook (book: Book): Observable<Book> {
    //let payload = JSON.stringify(book);
    return this.http.post(this.listURL, book).map((resp:Response) => resp.json());
  }

  deleteBook(isbn: string): Observable<boolean> {
    return this.http.delete(this.detailURL + isbn).map((resp:Response) => resp.text() === 'OK');
  }
}
