import { Component, Output, EventEmitter } from '@angular/core';
import { IonicPage, NavController, ViewController, NavParams } from 'ionic-angular';
import { ContactPage } from '../contact/contact';
import { WordService } from '../../app/services/word-service';
import { Word } from '../../app/models/word';

/**
 * Generated class for the EditWordsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-edit-contacts',
  templateUrl: 'edit-contact.html',
})
export class EditContactPage {
    editing: boolean = false;
    contact: object;
    words: Array<any>;
    constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, private wordService: WordService) {
        this.editing = this.navParams.get('edit');
        this.contact = this.navParams.get('contact') ? this.navParams.get('contact') : {text: ''};
        wordService.getWords().then((d) => {
            this.words = d;
        });
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad Edit Contacts Page');

    }
    save() {
        console.log("here")
        this.viewCtrl.dismiss({contact: this.contact, cancel: false});

    }
    cancel() {
        this.viewCtrl.dismiss({contact: this.contact, cancel: true});

    }

}
