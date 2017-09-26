import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
    selector: 'page-activation',
    templateUrl: 'activation.html'
})
export class ActivationPage {
    active: boolean = false;
    constructor(public navCtrl: NavController) {

    }

    listening() {
        this.active = !this.active;
    }

}
