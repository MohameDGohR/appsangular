import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

import {User, auth} from 'firebase';
import { Observable, of } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { userinfo } from './userinfo';
import { switchMap } from 'rxjs/operators';
import { UserService } from './user.service';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user$: Observable<User> ;

  constructor(private fauth: AngularFireAuth, private  rout: ActivatedRoute, private userin: UserService ) {
    this.user$  = this.fauth.authState ;
   }


   Login(){
     const returnUrl = this.rout.snapshot.queryParamMap.get('returnUrl') || '/';
     localStorage.setItem('returnUrl', returnUrl);
    // tslint:disable-next-line:align
    this.fauth.signInWithRedirect(new auth.GoogleAuthProvider());
  }

  logout(){

    this.fauth.signOut();
  }
  get Appuser$(): Observable<userinfo>{
    return this.user$.pipe(switchMap( user => {
      if (user){
        return this.userin.getuser(user.uid).valueChanges();
               }else{
        return of(null);
      }
    }));
  }
}
