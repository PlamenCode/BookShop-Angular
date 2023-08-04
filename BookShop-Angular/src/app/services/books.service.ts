import { Injectable } from '@angular/core';
import { Book, BookId } from '../interfaces/Book';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './auth.service';


@Injectable({
  providedIn: 'root',
})
export class BooksService {
  constructor(
    private httpClient: HttpClient,
    private auth: AuthService,
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
    return this.httpClient
      .post('http://localhost:3000/AngularDef/data', body)
      .subscribe();
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
    // const data = Object.assign(book, {ownerId: this.auth.getUserId()});
    return this.httpClient
      .put(`http://localhost:3000/AngularDef/data/${params}`, data)
      .subscribe();
  };

  deleteBok(book: BookId) {
    const data = {
      user: this.auth.user,
    };
    return this.httpClient
      .delete(`http://localhost:3000/AngularDef/data/${book._id}`, { body: data })
      .subscribe();
  };

}
