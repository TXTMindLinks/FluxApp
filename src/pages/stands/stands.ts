import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MapsPage } from '../maps/maps'
import { ProductPage } from '../product/product'


@Component({
  selector: 'page-stands',
  templateUrl: 'stands.html',
  
})
export class StandsPage {

  constructor(public navCtrl: NavController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StandsPage');
  }
  goToMaps(){
     this.navCtrl.push(MapsPage);

  }
  goToStands(){
    this.navCtrl.push(ProductPage);
  }
  
}
