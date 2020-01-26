import { Component, OnInit } from '@angular/core';
import {Book} from '../Model/book.model';
import {ActivatedRoute, Router} from '@angular/router';
import {BookService} from '../Services/book.service';

@Component({
  selector: 'app-book-view',
  templateUrl: './book-view.component.html',
  styleUrls: ['./book-view.component.scss']
})
export class BookViewComponent implements OnInit {

  book: Book;

  constructor(private route: ActivatedRoute,
              private bookService: BookService,
              private router: Router) { }

  ngOnInit() {
    this.book = new Book('', '');
    const id = this.route.snapshot.params.id;
    this.bookService.getBook(+id).then(
      (book: Book) => {
        this.book = book;
      }
    );
  }

  onBack() {

    this.router.navigate(['/Books', 'books-list']);
  }

  onEdit() {
    const id = this.route.snapshot.params.id;
    this.router.navigate(['/Books', 'books-edit', id]);
  }
}
