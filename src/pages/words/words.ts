import { Component, ViewChild } from '@angular/core';
import { NavController,  ModalController, NavParams, List } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { EditWordsPage } from '../edit-words/edit-words';
import { WordService } from '../../app/services/word-service'
import {Word} from '../../app/models/word';

@Component({
  selector: 'page-words',
  templateUrl: 'words.html',
  entryComponents:[EditWordsPage]
})
export class WordsPage {

  words: Array<object> = [];

  constructor(public navCtrl: NavController, public navParams: NavParams,
      public modalCtrl: ModalController, private storage: Storage, private wordService: WordService) {
        this.words = wordService.getWords()
  }

  removeItem(word){
    for(var i = 0; i < this.words.length; i++) {
        if(this.words[i] == word){
            this.words.splice(i, 1);
        }
    }
    this.wordService.setWords(this.words);

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
          this.wordService.setWords(this.words);
      });
      modal.present();
  }
  newWord(){
      var new_word = {data: {text: ''}}
      this.words.push(new_word)
      this.editItem(new_word, true);

  }

}
