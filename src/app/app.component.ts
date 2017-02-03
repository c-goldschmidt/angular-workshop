import { Component } from '@angular/core';
import { BookDataService } from "./shared/book-data.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'My books app';
}
