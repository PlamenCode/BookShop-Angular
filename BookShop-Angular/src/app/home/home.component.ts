import { Component, OnInit } from '@angular/core';
import { BookId } from '../interfaces/Book';
import { BooksService } from '../services/books.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  books: BookId[] = [];

  constructor(private bookService: BooksService){}

  ngOnInit(): void {
    this.bookService.getThreeBooks().subscribe(
      res => { this.books = res as BookId[] }
    )
  }

}
