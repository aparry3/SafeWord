import { Component, ViewChild } from '@angular/core';
import { NavController,  ModalController, NavParams, List } from 'ionic-angular';

import { EditWordsPage } from '../edit-words/edit-words';

@Component({
  selector: 'page-words',
  templateUrl: 'words.html',
  entryComponents:[EditWordsPage]
})
export class WordsPage {

  words: any;
  addWordField: string;
  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
        this.words = [
            {data: {text: 'Bread'}},
            {data: {text: 'Butter'}}
        ];
  }

  removeItem(word){
  for(var i = 0; i < this.words.length; i++) {
    if(this.words[i] == word){
      this.words.splice(i, 1);
      }
    }
  }

  editItem(edit_word, is_new){
      let orig_word = Object.assign({}, edit_word.data);
      let modal = this.modalCtrl.create(EditWordsPage, {
          word: edit_word.data,
          edit: !is_new
      });
      modal.onDidDismiss(data => {
          console.log(data);
          edit_word.data = data.word;
          if (data.cancel) {
              edit_word.data = orig_word;
              if (is_new) {
                  this.removeItem(edit_word);
                  console.log(this.words);
              }
          }
      });
      modal.present();
  }
  newWord(){
      var new_word = {data: {text: ''}}
      this.words.push(new_word)
      this.editItem(new_word, true);

  }

}
