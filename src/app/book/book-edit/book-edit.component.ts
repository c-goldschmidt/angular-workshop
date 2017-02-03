import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { Observable } from 'rxjs'

import { Book } from "../../shared/book-interface";
import { BookDataService } from "../../shared/book-data.service";

@Component({
  selector: 'book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css']
})
export class BookEditComponent implements OnInit {
  private book: Book;
  private isbn: string;
  private isNewBook: boolean;
  private form: FormGroup;
  private rxISBN = /((978[\--– ])?[0-9][0-9\--– ]{10}[\--– ][0-9xX])|((978)?[0-9]{9}[0-9Xx])/;

  constructor(
    private route: ActivatedRoute,
    private bookData: BookDataService,
    private fb: FormBuilder
  ) { }

  buildForm() {
    this.form = this.fb.group({
      title: [this.book.title, Validators.required],
      subtitle: [this.book.subtitle],
      isbn: [
        {value: this.book.isbn, disabled: !this.isNewBook},
        Validators.compose([Validators.required, Validators.minLength(13)])
      ],
      abstract: [this.book.abstract],
      numPages: [this.book.numPages],
      author: [this.book.author],
      publisher: this.fb.group({
        name: [this.book.publisher.name],
        url: [this.book.publisher.url],
      }),
    });
  }

  ngOnInit() {
    this.isNewBook = !this.route.snapshot.data['book']
    if(!this.isNewBook){
      this.book = this.route.snapshot.data['book'];
      this.isbn = this.book.isbn;
    } else {
      this.book = {
        title: '',
        subtitle: '',
        isbn: '',
        abstract: '',
        numPages: 0,
        author: '',
        publisher: {
          name: '',
          url: '',
        },
      };
    }

    this.buildForm();
  }

  onSubmit(): void {
    if(this.form.valid){
      this.save(this.form.value);
    } else {
      alert('not all that valid...');
    }
  }

  save(formData: Book): void {
    let observable: Observable<Book>;
    if(this.isNewBook){
      observable = this.bookData.addBook(formData);
    } else {
      formData.isbn = this.isbn;
      observable =this.bookData.saveBook(formData);
    }

    let sub = observable.subscribe((book: Book) => {
      this.book = book;
      this.isbn = book.isbn;
      alert("m'kaaaay");
      sub.unsubscribe();
    });
  }

  private transformISBN(input: string) : string {
    if(input.indexOf('-') === -1 && input.length === 13){
      let part1 = input.slice(0, 3);
      let part2 = input.slice(3, 1);
      let part3 = input.slice(4, 5);
      let part4 = input.slice(9, 3);
      let part5 = input.slice(12, 1);

      input = `${part1}-${part2}-${part3}-${part4}-${part5}`
    }

    if(!this.rxISBN.test(input)){
      console.debug('invalid');
    }

    return input;
  }
}
