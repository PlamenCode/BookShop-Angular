import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { Book, BookId } from 'src/app/interfaces/Book';
import { CartService } from 'src/app/services/cart.service';
import { BooksService } from '../../services/books.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit, OnDestroy {

  private routeSub = Subscription as any;
  bookDetails: BookId = undefined as any;
  isUser: boolean = false;
  isInCart: boolean = false;
  routeId: string = '';

  constructor(
    private route: ActivatedRoute, 
    private auth: AuthService,
    private router: Router,
    private cartService: CartService,
    private bookService: BooksService,
    ) { }

  // ngOnInit(): void {
  //   if(this.auth.getUserId()){
  //     this.isUser = true;
  //   }
  //   this.routeSub = this.route.params.subscribe(params => {
  //   this.routeId = params['id'];
  //   this.http.get(`http://localhost:3000/AngularDef/data/${params['id']}`).subscribe(
  //     res => { 
  //       this.bookDetails = res as BookId;
  //       if(this.bookDetails.ownerId == this.auth.getUserId()){
  //         this.isOwner = true;
  //       }
  //     })
  //   });
  // }

 async ngOnInit() {
    if(this.auth.getUserId()){
        this.isUser = true;
    };
    this.routeSub = this.route.params.subscribe(params => {
        this.routeId = params['id'];
    }); 
    this.bookService.getBook(this.routeId).subscribe(res => {
        this.bookDetails = res as any
    }); 
	this.bookService.checkBook(this.routeId).subscribe(res => {
		this.isInCart = res as any;
	});
  }

  isItOwner(){
    return this.bookDetails.ownerId == this.auth.getUserId() ? true : false;
  };

  
  ngOnDestroy() {
    this.routeSub.unsubscribe();
  };

  onEditClick(){
    return this.router.navigate([`/edit/${this.routeId}`]);
  };

  onDeleteClick(){
    this.bookService.deleteBok(this.bookDetails);
    return this.router.navigate(['/books']);
  };

  onRemoveClick(book: BookId){
    this.cartService.remove(book);
	this.isInCart = false;
  };
  
  onAddClick(book: BookId){
    this.cartService.add(book);
	this.isInCart = true;
  }
}
