import { Component } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  constructor(private cartService: CartService) { }


  getCart(){
    return this.cartService.get();
  }

  removeFromCart(event: any){
    console.log(event);
    
    // this.cartService.remove(this.cartService.remove());
  }
}
