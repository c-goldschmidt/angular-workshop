/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule } from '@angular/forms'

import { BookEditComponent } from './book-edit.component';
import { ActiveRouteBookMock } from "../../shared/testing/route-with-book.mock";
import { BookDataService } from "../../shared/book-data.service";
import { BookDataServiceMock } from "../../shared/testing/book-data.service.mock";

describe('BookEditComponent', () => {
  let component: BookEditComponent;
  let fixture: ComponentFixture<BookEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ RouterTestingModule, ReactiveFormsModule ],
      declarations: [ BookEditComponent ],
      providers: [{
        provide: ActivatedRoute,
        useClass: ActiveRouteBookMock,
      }, {
        provide: BookDataService,
        useClass: BookDataServiceMock
      }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
