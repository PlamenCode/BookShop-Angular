import { Component } from '@angular/core';
import { RegisterForm } from 'src/app/interfaces/Auth';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  form: RegisterForm = {
    email: '',
    password: '',
    repass: '',
  };

  constructor(private authService: AuthService) { }

  submit() {
   this.authService.register(this.form)
  }

  isLoading(){
    return this.authService.isAuthenticated;
  }
}
