import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CartService } from '../services/cart.service';
import { BookId } from '../interfaces/Book';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{
  cart: BookId[] = [];

  constructor(private cartService: CartService, private http: HttpClient, private auth: AuthService, private router: Router) { }
  

  ngOnInit(): void {
      this.http.get(`http://localhost:3000/AngularDef/data/cart/${this.auth.getUserId()}`).subscribe(res => {
      this.cart = res as any;
    })
  }

  removeFromCart(book: BookId){
    //TODO REFRESH PAGE TO VISUALIZE TGE CHANGES
    this.http.delete(`http://localhost:3000/AngularDef/data/cart/${this.auth.getUserId()}/${book._id}`).subscribe();
    this.cart = this.cart.filter(x => x !== book);
  }


}
