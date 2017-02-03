import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';

import { BookListComponent } from "./book-list/book-list.component";
import { BookDetailComponent } from "./book-detail/book-detail.component";
import { CanDeactivateGuard } from "./guards/can-deactivate-book.guard";
import { ResolveBook } from "./guards/resolve-book.guard";
import { ResolveBookList } from "./guards/resolve-book-list.guard";
import { BookEditComponent } from "./book-edit/book-edit.component";

export const bookRoutes: Routes = [{
  path: '',
  component: BookListComponent,
  resolve: { books: ResolveBookList },
}, {
  path: 'add',
  component: BookEditComponent,
  canDeactivate: [CanDeactivateGuard],
}, {
  path: ':isbn',
  component: BookDetailComponent,
  resolve: { book: ResolveBook },
}, {
  path: ':isbn/edit',
  component: BookEditComponent,
  canDeactivate: [CanDeactivateGuard],
  resolve: { book: ResolveBook },
}];
export const routing: ModuleWithProviders = RouterModule.forChild(bookRoutes);
