import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { RegisterForm } from 'src/app/interfaces/Auth';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  hasError = false;
  doMatch = false;
  form: RegisterForm = {
    email: '',
    password: '',
    repass: '',
  };

  constructor(private authService: AuthService) { }


  submit() {
   this.authService.register(this.form)
   if(this.authService.registerError){
    this.hasError = true;
   }
   if(this.form.password != this.form.repass){
    this.doMatch = false;
   }
  }

  isLoading(){
    return this.authService.isAuthenticated;
  }
}
