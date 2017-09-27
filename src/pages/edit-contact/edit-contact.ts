import { Component, Output, EventEmitter } from '@angular/core';
import { IonicPage, NavController, ViewController, NavParams } from 'ionic-angular';
import { ContactPage } from '../contact/contact';
/**
 * Generated class for the EditWordsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-contacts',
  templateUrl: 'edit-contact.html',
})
export class EditContactPage {
    editing: boolean = false;
    contact: object;
    constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
        this.editing = this.navParams.get('edit');
        this.contact = this.navParams.get('contact') ? this.navParams.get('contact') : {text: ''};
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad EditWordsPage');
    }
    save() {
        console.log("here")
        this.viewCtrl.dismiss({contact: this.contact, cancel: false});

    }
    cancel() {
        this.viewCtrl.dismiss({contact: this.contact, cancel: true});

    }

}
