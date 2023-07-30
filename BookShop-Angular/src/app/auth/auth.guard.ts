import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router'
import { AuthService } from './auth.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
    constructor(private authService: AuthService, private router: Router) { }
    canActivate (){ 
      if(this.authService.isAuthenticated){
        return this.authService.isAuthenticated;
      } else{
        return this.router.navigate(['/login'])
      }
    }
}
