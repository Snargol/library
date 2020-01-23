import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BooksListComponent } from './Books/books-list/books-list.component';
import { BookViewComponent } from './Books/book-view/book-view.component';
import { BookEditComponent } from './Books/book-edit/book-edit.component';
import { SignUpComponent } from './User/sign-up/sign-up.component';
import { SignInComponent } from './User/sign-in/sign-in.component';
import { HeaderComponent } from './Application/header/header.component';
import {AuthService} from './User/Services/auth.service';
import {AuthGuardService} from './User/Services/auth-guard.service';
import {BookService} from './Books/Services/book.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';
import { FourOhFourComponent } from './Application/four-oh-four/four-oh-four.component';

const appRoutes: Routes = [
  { path: 'User/sign-up', component: SignUpComponent },
  { path: 'User/sign-in', component: SignInComponent },
  { path: 'Books/books-list', component: BooksListComponent },
  { path: 'Books/books-view', component: BookViewComponent },
  { path: 'Books/books-edit', component: BookEditComponent },
  { path: '', component: SignInComponent },
  { path: 'not-found', component: FourOhFourComponent },
  { path: '**', redirectTo: 'not-found' }
];

@NgModule({
  declarations: [
    AppComponent,
    BooksListComponent,
    BookViewComponent,
    BookEditComponent,
    SignUpComponent,
    SignInComponent,
    HeaderComponent,
    FourOhFourComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    AuthService,
    BookService,
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
