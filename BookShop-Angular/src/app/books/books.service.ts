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
    let body = {
      book: book,
      user: this.auth.user
    }
    return this.httpClient.post('http://localhost:3000/AngularDef/data', body ).subscribe()
  };

  checkBook(book: BookId){
    if(this.auth.isAuthenticated){ 
      return this.httpClient.get(`http://localhost:3000/AngularDef/cart/check/${this.auth.getUserId()}/${book._id}`).subscribe(res => {
        if(res == true){
          return true;
        } else {
          return false
        }
      })
    } else{
      return false;
    }
  }; 

  editBook(book: Book, params: string){
    const data = {
      book,
      user: this.auth.user
    }
    // const data = Object.assign(book, {ownerId: this.auth.getUserId()});
    return this.httpClient.put(`http://localhost:3000/AngularDef/data/${params}`, data).subscribe()
  };

  deleteBok(book: BookId){
    const data = { 
      user: this.auth.user
      };
    return this.httpClient.delete(`http://localhost:3000/AngularDef/data/${book._id}`,  { body:data } ).subscribe();
  };
}
