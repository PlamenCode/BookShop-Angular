import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { Book, BookId } from '../../interfaces/Book';
import { CartService } from 'src/app/services/cart.service';
import { BooksService } from '../books.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit{
  @Input() book: BookId = {} as any;
  cart: BookId[] = [];

  isInCart: boolean = false;

  constructor(private cartService: CartService, private bookService: BooksService, private router: Router) { }


  ngOnInit(): void {   
  }
  
  details(){
    return this.router.navigate([`/books/${this.book._id}`])
  }
  
 
  addToCart(){
    return this.cartService.add(this.book); 
  };

  removeFromCart(){
    this.isInCart = false;
    this.cartService.remove(this.book);
  }
}
