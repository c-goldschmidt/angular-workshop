/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { BookListComponent } from './book-list.component';
import { BookDataService } from "../../shared/book-data.service";
import { BookDataServiceMock } from "../../shared/testing/book-data.service.mock";
import { ActiveRouteBookListMock } from "../../shared/testing/route-with-book-list.mock";

describe('BookListComponent', () => {
  let component: BookListComponent;
  let fixture: ComponentFixture<BookListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ RouterTestingModule ],
      declarations: [ BookListComponent ],
      providers: [{
        provide: BookDataService,
        useClass: BookDataServiceMock,
      }, {
        provide: ActivatedRoute,
        useClass: ActiveRouteBookListMock,
      }]
    })
    .compileComponents();
  }));


  beforeEach(() => {
    fixture = TestBed.createComponent(BookListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
