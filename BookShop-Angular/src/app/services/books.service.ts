import { Injectable } from '@angular/core';
import { Book, BookId } from '../interfaces/Book';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root',
})
export class BooksService {
  constructor(
    private httpClient: HttpClient,
    private auth: AuthService,
    private router: Router,
  ) {}

  getBooks() {
    return this.httpClient.get('http://localhost:3000/AngularDef/data');
  };

  getBook(routeId: string) {
    try {
        return this.httpClient.get(`http://localhost:3000/AngularDef/data/${routeId}`)
    } catch (error: any) {
        throw new Error(error.message);
    }
  };

  createBook(book: Book) {
    let body = {
      book: book,
      user: this.auth.user,
    };
      return this.httpClient.post('http://localhost:3000/AngularDef/data', body)
  };

  checkBook(bookId: string) {
    return this.httpClient
      .get(`http://localhost:3000/AngularDef/cart/check/${this.auth.getUserId()}/${bookId}`);
  };

  editBook(book: Book, params: string) {
    const data = {
      book,
      user: this.auth.user,
    };
    return this.httpClient
      .put(`http://localhost:3000/AngularDef/data/${params}`, data)
  };

  deleteBook(bookId: string) { 
    const data = {
      body : {
        user: this.auth.user,
        itemId: bookId
      }
    };
    return this.httpClient.delete(`http://localhost:3000/AngularDef/data/${bookId}`, data );
  };

}
