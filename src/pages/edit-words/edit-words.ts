import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
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

  constructor(public navCtrl: NavController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditWordsPage');
  }

}
