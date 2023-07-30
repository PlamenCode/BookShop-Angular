import { Component } from '@angular/core';
import { createForm } from 'src/app/interfaces/Book';
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

  submitDatabase(){
    if(this.form.name == '' || this.form.author == '' || this.form.img == '' || this.form.price == 0 || this.form.description == ''){
      return;
    }
    this.bookService.createBook(Object.assign(this.form, {ownerId: this.authService.getUserId()}));
    this.router.navigate(['/'])
  }

}
