import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { LoginsuccessPage} from '../loginsuccess/loginsuccess';

@Component({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {

  public event = {
      name: "Party",
      place: "You know",
      dick: "Huge"
  }

  public receivedData;

  constructor(public navCtrl: NavController, private modalController: ModalController) {

  }
  public login () {
    /**
     * This creates a modal that slides up instead of a page with a back button
     * Also let's you pass back data from the modal/view with 'onDidDismiss'
     */
    let modalPage = this.modalController.create(LoginsuccessPage, {myEvent: this.event});
    modalPage.onDidDismiss(data =>{
        console.log(data);
    });
    modalPage.present();

    /**
     * This pushes the login page with a back button
     */
    // this.navCtrl.push(LoginsuccessPage, {
    //     myEvent: this.event
    // });


    /**
     * This sets the page as the Root Page, no back button but menu becomes available.
     */
    // this.navCtrl.setRoot(LoginsuccessPage, {myEvent: this.event});
  }
}
