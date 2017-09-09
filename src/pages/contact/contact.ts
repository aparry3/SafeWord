import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  contacts: any;

  constructor(public navCtrl: NavController) {

    this.contacts = [
        'George RR Martin',
        'Obama',
        'Elon Musk'
    ];

  }

  
}
