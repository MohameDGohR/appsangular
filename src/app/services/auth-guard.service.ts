import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from './auth.service';
import {map} from 'rxjs/operators' ;

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private auth: AuthService , private router: Router) { }
  // tslint:disable-next-line:max-line-length
  // tslint:disable-next-line:quotemark
  // tslint:disable-next-line:max-line-length
  canActivate( router , state: RouterStateSnapshot ){

    return this.auth.user$.pipe(map(user => {
      if (user)
      {
        return true;
      }else{
        this.router.navigate(['/login'], { queryParams: {returnUrl: state.url}});
        return false ;
      }
    }));
  }
}
