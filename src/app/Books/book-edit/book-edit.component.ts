import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {BookService} from '../Services/book.service';
import {Book} from '../Model/book.model';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.scss']
})
export class BookEditComponent implements OnInit {

  bookForm: FormGroup;
  book: Book;
  edit: boolean;
  fileIsUploading = false;
  fileUrl: string;
  fileUploaded = false;


  constructor(private formBuilder: FormBuilder, private booksService: BookService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    const id = this.route.snapshot.params.id;
    this.booksService.getBook(+id).then(
      (book: Book) => {
        this.book = book;
        this.edit = true;
      }
    );

    if (this.book === undefined) {
      this.book = new Book('', '');
      this.book.synopsis = '';
      this.edit = false;
    }

    this.initForm();

  }

  initForm() {
    this.bookForm = this.formBuilder.group({
      title: ['', Validators.required],
      author: ['', Validators.required],
      synopsis: ''
    });

    this.bookForm.get('title').setValue(this.book.title != null ? this.book.title : 'lala');
  }

  onSaveBook() {
    const title = this.bookForm.get('title').value;
    const author = this.bookForm.get('author').value;
    const synopsis = this.bookForm.get('synopsis').value;
    const newBook = new Book(title, author);
    newBook.synopsis = synopsis;
    if (this.fileUrl && this.fileUrl !== '') {
      newBook.photo = this.fileUrl;
    }
    if (!this.edit) {
      this.booksService.createNewBook(newBook);
    } else {
      this.booksService.saveBook(this.book, 1);
    }
    this.router.navigate(['/Books', 'books-list']);
  }

  detectFiles(event) {
    this.onUploadFile(event.target.files[0]);
  }

  onAnnuler() {
    this.router.navigate(['/Books', 'books-list']);
  }

  onUploadFile(file: File) {
    this.fileIsUploading = true;
    this.booksService.uploadFile(file).then(
      (url: string) => {
        this.fileUrl = url;
        this.fileIsUploading = false;
        this.fileUploaded = true;
      }
    );
  }

}

