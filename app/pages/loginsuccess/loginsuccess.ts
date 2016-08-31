import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';

/*
  Generated class for the LoginsuccessPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/loginsuccess/loginsuccess.html',
})
export class LoginsuccessPage {
    public smooches;
  constructor(private navCtrl: NavController, private params: NavParams, private viewCtrl: ViewController) {
      this.smooches = this.params.get("myEvent");
  }
  popThis() {
      /**
       * Pops the page from the nav stack
       */
    //   this.navCtrl.pop();

    /**
     * Closes out modal page but allows you to pass data back on the dismiss
     */
    let data = {
        dick: "huge"
    }
    this.viewCtrl.dismiss(data);
  }
}
