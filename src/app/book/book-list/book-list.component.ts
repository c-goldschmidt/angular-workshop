import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from "../../shared/book-interface";
import { BookDataService } from "../../shared/book-data.service";

@Component({
  selector: 'book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
})

export class BookListComponent implements OnInit {
  private books: Book[];
  constructor(private route: ActivatedRoute, private bookData: BookDataService) { }

  ngOnInit() {
    this.books = this.route.snapshot.data['books'];
  }

  deleteBook(isbn: string) {
    let srsly = confirm('srsly?');
    if(!srsly){
      return;
    }
    let sub = this.bookData.deleteBook(isbn).subscribe((status) => {
      if(status){
        alert('OK');

        let sub = this.bookData.getBooks().subscribe((books: Book[]) => {
          this.books = books;
          sub.unsubscribe();
        })

      } else {
        alert('NOK!!!');
      }
      sub.unsubscribe();
    })
  }
}
