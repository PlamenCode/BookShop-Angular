import { Component } from '@angular/core';
import { createForm } from 'src/app/interfaces/Book';
import { BooksService } from '../../services/books.service';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {
  hasError: boolean = false;
  errorMsg: string = '';
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
    const data = Object.assign(this.form, {ownerId: this.authService.getUserId()})
    this.bookService.createBook(data).subscribe(
      res => { this.router.navigate(['/books']) },
      error => { 
        this.hasError = true;
        this.errorMsg = error.error.message;
      },
    );
  }

}
