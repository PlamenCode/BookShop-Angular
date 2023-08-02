import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { Book, BookId } from '../../interfaces/Book';
import { CartService } from 'src/app/services/cart.service';
import { BooksService } from '../../services/books.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit{
  @Input() book: BookId = {} as any;

  isInCart: boolean = false;
  hasUser: boolean = false;

  constructor(
    private cartService: CartService, 
    private router: Router, 
    private httpClient: HttpClient,
    private auth: AuthService,
    ) { }

  ngOnInit(): void {
    if(this.auth.isAuthenticated){
      this.hasUser = true;
      this.httpClient.get(`http://localhost:3000/AngularDef/cart/check/${this.auth.getUserId()}/${this.book._id}`).subscribe(res => {
        this.isInCart = res as any;
      }) 
    } else{
      this.isInCart = false;
      this.hasUser = false;
    }
  }

  details(){
    return this.router.navigate([`/books/${this.book._id}`])
  }
  
  addToCart(){
    if(this.auth.isAuthenticated){
      this.cartService.add(this.book); 
      return this.isInCart = true;
    } else{
      return this.router.navigate(['/login'])
    }

  };

  removeFromCart(){
    this.cartService.remove(this.book);
    return this.isInCart = false;
  };

}
