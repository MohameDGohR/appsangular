import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

import {User, auth} from 'firebase';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user$: Observable<User> ;

  constructor(private fauth: AngularFireAuth ) {
    this.user$  = this.fauth.authState ;
   }


   Login(){
    this.fauth.signInWithRedirect(new auth.GoogleAuthProvider());
  }

  logout(){

    this.fauth.signOut();
  }
}
