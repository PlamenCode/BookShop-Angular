import { Injectable } from '@angular/core';
import { Book, BookId } from '../interfaces/Book';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(private router: Router, private httpClient: HttpClient, private auth: AuthService) { }

  getBooks(){
    return this.httpClient.get('http://localhost:3000/AngularDef/data');
  };

  createBook(book: Book){
    return this.httpClient.post('http://localhost:3000/AngularDef/data', book).subscribe()
  };

  checkBook(book: BookId){
    return this.httpClient.get(`http://localhost:3000/AngularDef/data/cart/check/${this.auth.getUserId()}/${book._id}`).subscribe(res => {
      if(res == true){
        return true;
      } else {
        return false
      }
    })
  }; 

  editBook(book: Book, params: string){
    const data = Object.assign(book, {ownerId: this.auth.getUserId()});
    return this.httpClient.put(`http://localhost:3000/AngularDef/data/${params}`, data).subscribe()
  }
}
