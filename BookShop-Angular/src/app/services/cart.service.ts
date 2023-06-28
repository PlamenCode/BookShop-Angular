import { Injectable, OnInit } from '@angular/core';
import { Book, BookId } from '../interfaces/Book';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart: BookId[] = [];

  constructor(private http: HttpClient, private auth: AuthService) { }


  add(book:BookId){
    return this.http.get(`http://localhost:3000/AngularDef/data/cart/${this.auth.getUserId()}/${book._id}`).subscribe(res => {
      return res;
    })
  }

  get(){
    return this.http.get(`http://localhost:3000/AngularDef/data/cart/${this.auth.getUserId()}`).subscribe(res => {
      this.cart = res as any;
      return res;
    })
  }

  remove(book: Book){
    this.cart = this.cart.filter(b => b.name != book.name);
  }
}
