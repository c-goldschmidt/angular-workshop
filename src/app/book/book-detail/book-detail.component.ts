import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Book } from "../../shared/book-interface";

@Component({
  selector: 'book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {
  private book: Book;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.book = this.route.snapshot.data['book'];
  }

}
