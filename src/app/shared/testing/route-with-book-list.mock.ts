import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs'
import { BOOK_LIST_FIXTURE} from "./book.fixture";

export class ActiveRouteBookListMock extends ActivatedRoute {
  constructor() {
      super(null, null, null, null, null);
      this.params = Observable.of({isbn: "ISBN"});

      let snap = new ActivatedRouteSnapshot();
      snap.data = {
        books: BOOK_LIST_FIXTURE,
      };
      this.snapshot = snap;
  }
}
