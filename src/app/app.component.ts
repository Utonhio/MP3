import { Component } from '@angular/core';
import { LoginPage } from '../pages/login/login';
import { Platform } from 'ionic-angular';
import { AuthService } from '../providers/auth-service/auth-service';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = LoginPage;

  constructor(
    platform: Platform,
    private auth: AuthService
  ) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.auth.Session.subscribe(session=>{
        if(session){
            this.rootPage = 'principal page';
        }
          else{
            this.rootPage = 'login page';
          }
      });
  });
 }
}
