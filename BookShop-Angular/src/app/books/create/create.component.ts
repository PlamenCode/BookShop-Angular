import { Component } from '@angular/core';
import {  createForm } from 'src/app/interfaces/Book';
import { BooksService } from '../books.service';

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
    description: ''
  };

  constructor(private bookService: BooksService) { }

  submit(){
    this.bookService.createBook(this.form);
  }

}
