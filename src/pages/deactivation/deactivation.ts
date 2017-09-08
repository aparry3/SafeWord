import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {ActivationPage} from "../activation/activation";


@Component({
  selector: 'page-deactivation',
  templateUrl: 'deactivation.html'
})
export class DeactivationPage {

  constructor(public navCtrl: NavController) {
  }
  goToActivationPage() {
    this.navCtrl.push(ActivationPage);
  }
}
