import { Component, OnInit } from '@angular/core';
import { AuthService } from './../services/auth.service';



@Component({
  // tslint:disable-next-line:component-selector
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {


  constructor(private auth: AuthService ) {
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
