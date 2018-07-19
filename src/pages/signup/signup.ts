import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service/auth-service';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from 'angularfire2/auth';  



@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  user = { emailregistro : '', passwordregistro : '', passwordverificar : ''};

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
  cancel():void{
    this.navCtrl.push('login page');
  }
  signin():void{
    if(this.user.passwordregistro == '' || this.user.passwordverificar == ''){
      let alert = this.alertCtrl.create({
        title: 'Tienes que llenar los campos de contraseña',
        subTitle: ('Verifica los campos'),
        buttons: ['Aceptar']
      });
      alert.present();
    }
    else if(this.user.passwordregistro == this.user.passwordverificar){
      this.auth.registerUser(this.user.emailregistro,this.user.passwordregistro)
      .then((user) => {
        // El usuario se ha creado correctamente
      })
      .catch(err=>{
        let alert = this.alertCtrl.create({
          title: 'Error',
          subTitle: err.message,
          buttons: ['Aceptar']
        });
        alert.present();
      })
    }else{
      let alert = this.alertCtrl.create({
        title: 'Las contraseñas que ingresaste no son iguales',
        subTitle: ('Intenta escribir bien las contraseñas'),
        buttons: ['Aceptar']
      });
      alert.present();
    }
    
  }
}
