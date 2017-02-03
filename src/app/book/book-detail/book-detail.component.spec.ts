/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule, ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { Observable } from 'rxjs'
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BookDetailComponent } from './book-detail.component';
import {Book} from "../../shared/book-interface";
import { BOOK_FIXTURE } from "../../shared/testing/book.fixture";

class MockActiveRoute extends ActivatedRoute {
  constructor() {
      super(null, null, null, null, null);
      this.params = Observable.of({isbn: "ISBN"});

      let snap = new ActivatedRouteSnapshot();
      snap.data = {
        book: BOOK_FIXTURE,
      };
      this.snapshot = snap;
  }

}


describe('BookDetailComponent', () => {
  let component: BookDetailComponent;
  let fixture: ComponentFixture<BookDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookDetailComponent ],
      imports: [ RouterTestingModule ],
      providers: [{
        provide: ActivatedRoute,
        useClass: MockActiveRoute,
      }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
