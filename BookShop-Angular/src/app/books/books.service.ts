import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor() { }

  getBooks(){
    return [
      {
          name: 'Clean Code',
          author: 'Robert C. Martin ',
          img: 'https://m.media-amazon.com/images/I/41xShlnTZTL._SX376_BO1,204,203,200_.jpg',
          price: 12
      },
      {
          name: 'The Pragmatic Programmer',
          author: 'Andrew Hunt, David Thomas',
          img: 'https://m.media-amazon.com/images/I/41HXiIojloL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg',
          price: 25
      }
  ]
  }
}
