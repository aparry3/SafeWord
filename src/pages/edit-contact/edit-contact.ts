import { Component, Output, EventEmitter } from '@angular/core';
import { IonicPage, NavController, ViewController, NavParams } from 'ionic-angular';
import { ContactPage } from '../contact/contact';
import { WordService } from '../../app/services/word-service';
import { Word } from '../../app/models/word';
import { Contact } from '../../app/models/contact';

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
    contact: Contact;
    words: Array<Word>;
    constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, private wordService: WordService) {
        this.editing = this.navParams.get('edit');
        this.contact = this.navParams.get('contact') ? this.navParams.get('contact') : new Contact('');
        wordService.getWords().then((d) => {
            console.log(d);
            this.words = d;
        });
        console.log(this.contact);
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad Edit Contacts Page');

    }
    save() {
        console.log("here")
        console.log(this.contact)
        this.viewCtrl.dismiss({contact: this.contact, cancel: false});

    }
    cancel() {
        this.viewCtrl.dismiss({contact: this.contact, cancel: true});

    }
    toggleWord(word) {
        if (this.contains(word)) {
            this.contact.words = this.contact.words.filter(w => {
                return w.text != word.text;
            });
        } else {
            this.contact.words.push(word);
        }
    }
    contains(word) {
        return this.contact.words.map(w => {
            return w.text;
        }).indexOf(word.text) > -1;
    }

}
