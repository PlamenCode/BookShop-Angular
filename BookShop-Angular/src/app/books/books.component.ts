import { Component, OnInit } from '@angular/core';
import { Book, BookId } from '../interfaces/Book';
import { BooksService } from './books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

    books: BookId[] = [];

    constructor(private booksService: BooksService) {
        this.booksService.getBooks().subscribe(res => {
            this.books = res as BookId[];
        }) 
     }

    ngOnInit(): void {
        this.booksService.getBooks().subscribe(res => {
            this.books = res as BookId[];
        })          
    }

}
