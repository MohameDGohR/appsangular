import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { AuthService } from './auth.service';
import { Observable, of, observable  } from 'rxjs';

import { switchMap } from 'rxjs/operators';
import { userinfo } from './userinfo';
// tslint:disable-next-line:import-spacing


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor( private db: AngularFireDatabase) { }

  save(user: firebase.User){

    this.db.object('/users/' + user.uid ).update({
      name : user.displayName,
      email: user.email
    });
  }


  getuser(uid: string ){
    return  this.db.object('/users/' + uid);
  }

}
