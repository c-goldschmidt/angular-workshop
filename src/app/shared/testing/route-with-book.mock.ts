import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs'
import { BOOK_FIXTURE } from "./book.fixture";

export class ActiveRouteBookMock extends ActivatedRoute {
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
