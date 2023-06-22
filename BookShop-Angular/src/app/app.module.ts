import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BooksModule } from './books/books.module';
import { CartComponent } from './cart/cart.component';
import { AuthModule } from './auth/auth.module';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [ AppComponent, CartComponent, HomeComponent ],
  imports: [ BrowserModule, AppRoutingModule, BooksModule, AuthModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
