import { Component, Output, EventEmitter } from '@angular/core';
import { IonicPage, NavController, ViewController, NavParams } from 'ionic-angular';
import { WordsPage } from '../words/words';

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
    word: object;
    constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
        this.editing = this.navParams.get('edit');
        this.word = this.navParams.get('word') ? this.navParams.get('word') : {text: ''};
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

}
