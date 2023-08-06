import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent {
  errorMsg: string = '';
  constructor(private router: Router) { 
   const navigation = this.router.getCurrentNavigation();
   const state = navigation?.extras.state as { error: string };
   this.errorMsg = state.error;
  }
}
