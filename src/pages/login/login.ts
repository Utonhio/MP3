import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service/auth-service';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from 'angularfire2/auth';  

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  user= { email: '', password : ''};
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public auth : AuthService,
    public alertCtrl : AlertController,
    private afAuth: AngularFireAuth
  ) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  inicio():void{
    this.navCtrl.push('principal page');
  }
  goToSignup():void{
    this.navCtrl.push('signup page');
  }
  goToResetPassword():void{
    this.navCtrl.push('reset-password page');
  }
  
  login(){
    this.auth.loginUser(this.user.email,this.user.password ).then((user) => {
      }
    )
     .catch(err=>{
      let alert = this.alertCtrl.create({
        title: 'Error',
        subTitle: err.message,
        buttons: ['Aceptar']
      });
      alert.present();
    })
  }

  loginFacebook() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider())
    .then((res) => console.log(res));  
  }

}