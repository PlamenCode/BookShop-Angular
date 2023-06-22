import { Injectable } from '@angular/core';
import { Book } from '../interfaces/Book';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(private router: Router) { }

  getBooks(){
    ///change to take books from database
    return [
      {
          name: 'Clean Code',
          author: 'Robert C. Martin ',
          img: 'https://m.media-amazon.com/images/I/41xShlnTZTL._SX376_BO1,204,203,200_.jpg',
          price: 12,
          description: 'very nice book 6'
      },
      {
          name: 'The Pragmatic Programmer',
          author: 'Andrew Hunt, David Thomas',
          img: 'https://m.media-amazon.com/images/I/41HXiIojloL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg',
          price: 25,
          description: 'very nice book 5'
      },
      {
        name: 'Code Complete',
        author: 'Steve Mcconnell',
        img: 'https://m.media-amazon.com/images/P/0735619670.01._SCLZZZZZZZ_SX500_.jpg',
        price: 33,
        description: 'very nice book 4'
      },
      {
        name: 'Refactoring: Improving the Design of Existing Code',
        author: 'Martin Fowler, Kent Beck',
        img: 'https://m.media-amazon.com/images/I/51k+BvsOl2L._AC_UF1000,1000_QL80_.jpg',
        price: 30,
        description: 'very nice book 3'
      },
      {
        name: 'Code: The Hidden Language of Computer Hardware and Software',
        author: 'Charles Petzold',
        img: 'https://m.media-amazon.com/images/I/310WZuKyEUL._SX334_BO1,204,203,200_.jpg',
        price: 25,
        description: 'very nice book 2'
      },
      {
        name: 'Design Patterns: Elements of Reusable Object-Oriented Software',
        author: 'Erich Gamma',
        img: 'https://m.media-amazon.com/images/P/0201633612.01._SCLZZZZZZZ_SX500_.jpg',
        price: 26,
        description: 'very nice book 1'
      },
  ]
  }

  createBook(book: Book){
    /// make a request to database;
    console.log(book);
    this.router.navigate(['/books']);
  }
}
