import { Component } from '@angular/core';
import { LoginForm } from 'src/app/interfaces/Auth';
import { AuthService } from '../../services/auth.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})

export class LoginComponent {
  hasError = false;
  form: LoginForm = {
    email: '',
    password: '',
  };

  constructor(private authService: AuthService, private cartService: CartService) { }

  submit() {
    this.authService.login(this.form);
    if(this.authService.loginError){
      this.hasError = true;
    }
  }

  isLoading(){
    return this.authService.isAuthenticated;
  }
}
