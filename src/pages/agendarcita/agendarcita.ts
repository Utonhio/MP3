import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AgendarcitaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-agendarcita',
  templateUrl: 'agendarcita.html',
})
export class AgendarcitaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}
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

  ionViewDidLoad() {
    console.log('ionViewDidLoad AgendarcitaPage');
  }

}
