import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { Book } from '../../interfaces/Book';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit{
  @Input() book: Book = {} as Book;

  isInCart: boolean = false;

  constructor(private cartService: CartService) { }


  ngOnInit(): void {
    if(this.cartService.get().find(x => x.name == this.book.name)){
      this.isInCart = true;
    }
  }
 
  addToCart(){
    this.isInCart = true;
    this.cartService.add(this.book);  
  };

  removeFromCart(){
    this.isInCart = false;
    this.cartService.remove(this.book);
  }

  

  
}
