import { Injectable } from '@angular/core';
import { Book } from '../interfaces/Book';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(private router: Router, private httpClient: HttpClient) { }

  getBooks(){
    return this.httpClient.get('http://localhost:3000/AngularDef/data');
  };

  createBook(book: Book){
    return this.httpClient.post('http://localhost:3000/AngularDef/data', book).subscribe(res => {
      console.log(res);
    })
  };

  

}
