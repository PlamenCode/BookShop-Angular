import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';
import { BookId } from 'src/app/interfaces/Book';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit, OnDestroy {

  private routeSub = Subscription as any;
  bookDetails: BookId = undefined as any;
  isOwner: boolean = false;

  constructor(
    private route: ActivatedRoute, 
    private http: HttpClient,
    private auth: AuthService,
    ) {  }

  ngOnInit(): void {
   this.routeSub = this.route.params.subscribe(params => {
    this.http.get(`http://localhost:3000/AngularDef/data/${params['id']}`).subscribe(
      res => { 
        this.bookDetails = res as BookId;
        if(this.bookDetails.ownerId == this.auth.getUserId()){
          this.isOwner = true;
        }
      })
   });
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe();
  };

  onEditClick(){
    
  }
}
