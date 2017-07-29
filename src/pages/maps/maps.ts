import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { OptionsPage } from '../options/options'
/**
 * Generated class for the MapsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-maps',
  templateUrl: 'maps.html',
})
export class MapsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MapsPage');
  }
  goBackHome(){
    this.navCtrl.push(OptionsPage)
  }
}
