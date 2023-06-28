import { Component } from '@angular/core';
import {  createForm } from 'src/app/interfaces/Book';
import { BooksService } from '../books.service';
import { AuthService } from 'src/app/auth/auth.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {
  form: createForm = {
    name: '',
    author: '',
    img: '',
    price: 0,
    description: '',
  };

  constructor(private bookService: BooksService, private authService: AuthService, private router: Router) { }

  submit(){
    this.bookService.createBook(this.form);
  }
  submitDatabase(){ 
    console.log(this.form);
    
    this.bookService.createBook(Object.assign(this.form, {ownerId: this.authService.getUserId()}));
    this.router.navigate(['/'])
  }

}
