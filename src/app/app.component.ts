import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FinalProject';
  constructor(private uservice: UserService , private auth: AuthService , private rout: ActivatedRoute , private router: Router){
    this.auth.user$.subscribe(user => {

      if (user){

        this.uservice.save(user);
        const  returnurl = this.rout.snapshot.queryParamMap.get('returnUrl') ;
        this.router.navigateByUrl(returnurl);
      }
    });


  }

}
