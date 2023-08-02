import { Injectable } from '@angular/core';
import { BookId } from '../interfaces/Book';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart: BookId[] = [];

  constructor(private http: HttpClient, private auth: AuthService, private router: Router) { }


  add(book:BookId){
    if(this.auth.isAuthenticated){  
      return this.http.get(`http://localhost:3000/AngularDef/cart/${this.auth.getUserId()}/${book._id}`).subscribe(res => {
        return res;
      })
    } else {
      return;
    }
  };

  get(){
    return this.http.get(`http://localhost:3000/AngularDef/cart/${this.auth.getUserId()}`).subscribe(res => {
      this.cart = res as any;
      return res;
    })
  };

  remove(book: BookId){ 
    return this.http.delete(`http://localhost:3000/AngularDef/cart/${this.auth.getUserId()}/${book._id}`).subscribe();
  };

  isItInCart(book: BookId){ 
    if(this.cart.includes(book)){
      return true;
    } else {
      return false;
    }
  };

}
