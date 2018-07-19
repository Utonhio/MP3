import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service/auth-service';


@IonicPage()
@Component({
  selector: 'page-principal',
  templateUrl: 'principal.html',
})
export class PrincipalPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public auth: AuthService, public alertCtrl : AlertController) {}
  ionViewDidLoad() {
    console.log('ionViewDidLoad InfoPage');
    
  }

  inicio():void{
    this.navCtrl.push('principal page');
  }
  nosotros():void{
    this.navCtrl.push('nosotros page');
  }
  quehacemos():void{
    this.navCtrl.push('quehacemos page');
  }
  agendarcita():void{
    this.navCtrl.push('agendarcita page');
  }
  cerrarSesion(){
    this.auth.logout();
}

} 
