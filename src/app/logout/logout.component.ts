import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';


@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private fauth: AngularFireAuth ) {
    this.fauth.authState.subscribe(u => console.log(u)) ;
   }

  ngOnInit(): void {
  }
  Logout(){
    this.fauth.signOut();
  }

}
