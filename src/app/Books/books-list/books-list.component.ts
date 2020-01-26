import {Component, OnDestroy, OnInit} from '@angular/core';
import {Book} from '../Model/book.model';
import {Subscription} from 'rxjs';
import {BookService} from '../Services/book.service';
import {ActivatedRoute, Route, Router} from '@angular/router';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss']
})
export class BooksListComponent implements OnInit, OnDestroy {

  books: Book[];
  bookSubscription: Subscription;

  constructor(private bookService: BookService,
              private router: Router) { }

  ngOnInit() {
    this.bookSubscription = this.bookService.booksSubject.subscribe(
      (books: Book[]) => {
        this.books = books;
      }
    );
    this.bookService.getBooks();
    this.bookService.emitBooks();
  }

  onNewBook() {
    this.router.navigate(['/Books', 'books-new']);
  }

  onDeleteBook(book: Book) {
    this.bookService.deleteBook(book);
  }

  onViewBook(id: number) {
    this.router.navigate(['/Books', 'books-view', id]);
  }

  ngOnDestroy() {
    this.bookSubscription.unsubscribe();
  }

}
