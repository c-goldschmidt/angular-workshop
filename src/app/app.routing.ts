import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";

export const appRoutes: Routes = [{
  path: '',
  redirectTo: '/books',
  pathMatch: 'full',
}, {
  path: 'books',
  loadChildren: './book/book.module#BookModule',
}, {
  path: '**',
  component: PageNotFoundComponent,
}];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
