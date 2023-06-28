import { Component } from '@angular/core';
import { createForm } from 'src/app/interfaces/Book';
import { BooksService } from '../books.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {

  constructor(private bookService: BooksService, private router: Router, private authService: AuthService) {}

  form: createForm = {
    name: '',
    author: '',
    img: '',
    price: 0,
    description: '',
  };

  submitDatabase(){ 
    console.log(this.form);
    
    this.bookService.createBook(Object.assign(this.form, {ownerId: this.authService.getUserId()}));
    this.router.navigate(['/'])
  }
}
