import { Component, Output, EventEmitter } from '@angular/core';
import { IonicPage, NavController, ViewController, NavParams } from 'ionic-angular';
import { WordsPage } from '../words/words';
import { ContactService } from '../../app/services/contact-service';
import { Contact } from '../../app/models/contact';
import { Word } from '../../app/models/word';

/**
 * Generated class for the EditWordsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-edit-words',
  templateUrl: 'edit-words.html',
})
export class EditWordsPage {
    editing: boolean = false;
    word: Word;
    contacts: Array<Contact>;
    constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, private contactService: ContactService) {
        this.editing = this.navParams.get('edit');
        this.word = this.navParams.get('word') ? this.navParams.get('word') : new Word('');
        contactService.getContacts().then((d) => {
            this.contacts = d;
        });
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad EditWordsPage');

    }
    save() {
        console.log("here")
        this.viewCtrl.dismiss({word: this.word, cancel: false});

    }
    cancel() {
        this.viewCtrl.dismiss({word: this.word, cancel: true});

    }
    toggleContact(contact) {
        if (this.contains(contact)) {
            this.word.contacts = this.word.contacts.filter(c => {
                return c.name != contact.name;
            });
        } else {
            this.word.contacts.push(contact);
        }
    }
    contains(word) {
        return this.word.contacts.map(c => {
            return c.name;
        }).indexOf(word.name) > -1;
    }

}
