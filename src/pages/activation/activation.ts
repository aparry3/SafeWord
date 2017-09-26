import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {DeactivationPage} from "../deactivation/deactivation";

@Component({
    selector: 'page-activation',
    templateUrl: 'activation.html'
})
export class ActivationPage {
    active: boolean = false;
    constructor(public navCtrl: NavController) {

    }

}
