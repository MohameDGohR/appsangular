import { Component, OnInit } from '@angular/core';
import { AuthService } from './../services/auth.service';
import { UserService } from './../services/user.service';
import { userinfo } from './../services/userinfo';
import { map } from 'rxjs/operators';
import { observable, Observable } from 'rxjs';
import { app } from 'firebase';




@Component({
  // tslint:disable-next-line:component-selector
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  appuser: userinfo    ;

  constructor(private auth: AuthService ) {

    this.auth.Appuser$.subscribe(appuser => this.appuser = appuser);
    console.log( this.appuser);
   }


  ngOnInit(): void {
  }
  logout(){

    this.auth.logout();
  }
  get authservice(){
    return this.auth.user$ ;
  }

}
