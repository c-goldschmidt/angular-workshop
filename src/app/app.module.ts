import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { InfoBoxComponent } from './info-box/info-box.component';
import { BookDataService } from "./shared/book-data.service";
import { routing } from './app.routing';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    InfoBoxComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
  ],
  providers: [BookDataService],
  bootstrap: [AppComponent],
})
export class AppModule { }
