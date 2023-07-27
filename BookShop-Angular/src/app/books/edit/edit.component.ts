import { Component, OnInit } from '@angular/core';
import { BookId, createForm } from 'src/app/interfaces/Book';
import { BooksService } from '../books.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit{
  private routeSub = Subscription as any;
  params: string = '';

  form: createForm = {
    name: '',
    author: '',
    img: '',
    price: 0,
    description: '',
  };
  book: BookId = {
    name: '',
    author: '',
    img: '',
    price: 0,
    description: '',
    ownerId: '',
    _id: ''
  };

  constructor(
    private bookService: BooksService, 
    private router: Router, 
    // private authService: AuthService,
    private route: ActivatedRoute,
    private http: HttpClient,
  ) {}

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe(params => {
      this.params = params['id'];
    this.http.get(`http://localhost:3000/AngularDef/data/${params['id']}`).subscribe(
      res => {
        this.book = res as any;

        this.form.name = this.book.name;
        this.form.author = this.book.author;
        this.form.img = this.book.img;
        this.form.price = this.book.price;
        this.form.description = this.book.description;
      })
   });
  }

  submitDatabase(){  
    this.bookService.editBook(this.form, this.params);
    this.router.navigate(['/'])
  };

}
