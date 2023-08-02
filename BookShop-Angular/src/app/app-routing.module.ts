import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksComponent } from './books/books.component';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { AuthGuard } from './auth/auth.guard';
import { HomeComponent } from './home/home.component';
import { CreateComponent } from './books/create/create.component';
import { DetailsComponent } from './books/details/details.component';
import { EditComponent } from './books/edit/edit.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'books', component: BooksComponent },
  { path: 'books/:id', component: DetailsComponent },
  { path: 'edit/:id', component: EditComponent, canActivate:[AuthGuard] },
  { path: 'create', component: CreateComponent, canActivate:[AuthGuard] },
  { path: 'cart', component: CartComponent, canActivate:[AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }