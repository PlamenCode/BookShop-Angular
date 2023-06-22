import { Injectable } from '@angular/core';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, } from 'firebase/auth';
import { LoginForm, RegisterForm, User } from '../interfaces/Auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user: User = {
    email: '',
    uid: ''
  };

  isAuthenticated: boolean = false;
  isLoading: boolean = false;
  passwordMatch: boolean = true;

  constructor(private router: Router) {
    if(sessionStorage.getItem('accessToken')){
      this.isAuthenticated = true;
    }
  }

  login(form: LoginForm) {
    if (this.isLoading) {
      return;
    }
    this.isLoading = true;

    const auth = getAuth();
    signInWithEmailAndPassword(auth, form.email, form.password)
      .then((userCredential) => {
        this.isAuthenticated = true;
        const user: any = userCredential.user;

        this.user = {
          email: user.email,
          uid: user.uid,
        }

        sessionStorage.setItem('accessToken', JSON.stringify(user.accessToken));
        sessionStorage.setItem('user', this.user as any);

        this.router.navigate(['/']);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        this.isAuthenticated = false;
      })
      .finally(() => (this.isLoading = false));
  }

  register(form: RegisterForm) {
    if (this.isLoading) {
      return;
    }

    this.isLoading = true;
    if (form.password != form.repass) {
      this.passwordMatch = false;
      return;
    }
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, form.email, form.password)
      .then((userCredential) => {
        const user = userCredential.user;
        this.isAuthenticated = true;
        this.router.navigate(['/']);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        this.isAuthenticated = false;
      })
      .finally(() => (this.isLoading = false));
  }

  logout() {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        this.router.navigate(['/login'])
        this.isAuthenticated = false;    
        this.user = {
          email: '',
          uid: ''
        }
        
        sessionStorage.removeItem('accessToken');
        sessionStorage.removeItem('user');

      })
      .catch((error) => {
        // An error happened.
      });
  }
}
