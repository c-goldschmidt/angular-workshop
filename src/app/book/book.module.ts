import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { BookListComponent } from "./book-list/book-list.component";
import { BookDetailComponent } from "./book-detail/book-detail.component";
import { BookComponent } from "./book.component";
import { routing } from './book.routing';
import { TitleBoxComponent } from "../title-box/title-box.component";
import { CanDeactivateGuard } from "./guards/can-deactivate-book.guard";
import { ResolveBookList } from "./guards/resolve-book-list.guard";
import { ResolveBook } from "./guards/resolve-book.guard";
import { BookEditComponent } from './book-edit/book-edit.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    routing,
  ],
  declarations: [
    BookComponent,
    BookListComponent,
    BookDetailComponent,
    TitleBoxComponent,
    BookEditComponent,
  ],
  providers: [
    CanDeactivateGuard,
    ResolveBook,
    ResolveBookList,
  ]
})
export class BookModule { }
