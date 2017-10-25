import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,private iab: InAppBrowser) {

  }

  openWindow(){
    this.iab.create("https://nve-staging.ecofactor.com/", 'NVEnergy').on('exit').subscribe((ttt)=>{
        (<any>window).nativeWindow.focus();
    });
  }

}
