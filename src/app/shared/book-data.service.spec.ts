/* tslint:disable:no-unused-variable */

import { TestBed, inject } from '@angular/core/testing';
import { BaseRequestOptions, XHRBackend, Http, ResponseOptions, Response } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { BookDataService } from './book-data.service';
import {BOOK_LIST_FIXTURE, BOOK_FIXTURE} from "./testing/book.fixture";

describe('BookDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        BookDataService,
        MockBackend,
        BaseRequestOptions,
        {
          provide: Http,
          deps: [MockBackend, BaseRequestOptions],
          useFactory:
            (backend: XHRBackend, defaultOptions: BaseRequestOptions) => {
              return new Http(backend, defaultOptions);
            }
         }
      ]
    });
  });

  it('should get all books', inject(
    [BookDataService, MockBackend],
    (service: BookDataService, backend: MockBackend) => {
      expect(service).toBeTruthy();
      backend.connections.subscribe((connection: MockConnection) => {
        let options = new ResponseOptions({
          body: JSON.stringify(BOOK_LIST_FIXTURE)
        });
        connection.mockRespond(new Response(options));
      });
      service.getBooks().subscribe(books => expect(books).toEqual(BOOK_LIST_FIXTURE))
    }
  ));

  it('should get a book', inject(
    [BookDataService, MockBackend],
    (service: BookDataService, backend: MockBackend) => {
      expect(service).toBeTruthy();
      backend.connections.subscribe((connection: MockConnection) => {
        let options = new ResponseOptions({
          body: JSON.stringify(BOOK_FIXTURE)
        });
        connection.mockRespond(new Response(options));
      });
      service.getBookByISBN('ISBN').subscribe(book => expect(book).toEqual(BOOK_FIXTURE))
    }
  ));

  it('should save a book and return it', inject(
    [BookDataService, MockBackend],
    (service: BookDataService, backend: MockBackend) => {
      expect(service).toBeTruthy();
      backend.connections.subscribe((connection: MockConnection) => {
        let options = new ResponseOptions({
          body: JSON.stringify(BOOK_FIXTURE)
        });
        connection.mockRespond(new Response(options));
      });
      service.saveBook(BOOK_FIXTURE).subscribe(book => expect(book).toEqual(BOOK_FIXTURE))
    }
  ));

  it('should save a new book and return it', inject(
    [BookDataService, MockBackend],
    (service: BookDataService, backend: MockBackend) => {
      expect(service).toBeTruthy();
      backend.connections.subscribe((connection: MockConnection) => {
        let options = new ResponseOptions({
          body: JSON.stringify(BOOK_FIXTURE)
        });
        connection.mockRespond(new Response(options));
      });
      service.addBook(BOOK_FIXTURE).subscribe(book => expect(book).toEqual(BOOK_FIXTURE))
    }
  ));

  it('should delete a book and return true', inject(
    [BookDataService, MockBackend],
    (service: BookDataService, backend: MockBackend) => {
      expect(service).toBeTruthy();
      backend.connections.subscribe((connection: MockConnection) => {
        let options = new ResponseOptions({
          body: 'OK'
        });
        connection.mockRespond(new Response(options));
      });
      service.deleteBook('ISBN').subscribe(ok => expect(ok).toBeTruthy())
    }
  ));
});
