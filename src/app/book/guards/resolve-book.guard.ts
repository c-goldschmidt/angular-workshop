import { Injectable } from '@angular/core'
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router'
import { Observable } from 'rxjs'

import { Book } from "../../shared/book-interface";
import { BookDataService } from "../../shared/book-data.service";

@Injectable()
export class ResolveBook implements Resolve<Book> {
  constructor (private bookData: BookDataService) {}

  resolve(route:ActivatedRouteSnapshot, state:RouterStateSnapshot):Observable<Book> {
    return this.bookData.getBookByISBN(route.params['isbn']);
  }

}
