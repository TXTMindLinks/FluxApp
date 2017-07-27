import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MapsPage } from '../maps/maps'

/**
 * Generated class for the ProductPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-product',
  templateUrl: 'product.html',
})
export class ProductPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductPage');
  }
  goToMaps(){
     this.navCtrl.push(MapsPage);

  }
}
