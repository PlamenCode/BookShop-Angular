import { Component } from '@angular/core';
import { LoginForm } from 'src/app/interfaces/Auth';
import { AuthService } from '../auth.service';

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

  constructor(private authService: AuthService) { }

  submit() {
    this.authService.login(this.form);
    if(!this.authService.loginError){
      this.hasError = true;
    }
  }

  isLoading(){
    return this.authService.isAuthenticated;
  }
}
