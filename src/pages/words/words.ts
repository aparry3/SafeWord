import { Component, ViewChild } from '@angular/core';
import { NavController,  List } from 'ionic-angular';

import { EditWordsPage } from '../edit-words/edit-words';

@Component({
  selector: 'page-words',
  templateUrl: 'words.html',
  entryComponents:[EditWordsPage]
})
export class WordsPage {

  words: any;
  addWordField: string;

  constructor(public navCtrl: NavController) {

    this.words = [
        'Bread',
        'Milk',
        'Cheese',
        'Snacks',
        'Apples',
        'Bananas',
        'Peanut Butter',
        'Chocolate',
        'Avocado',
        'Vegemite',
        'Muffins',
        'Paper towels'
    ];


  }

  handleAddWord(){
    var newWord = this.addWordField
    this.words.push(newWord)
    console.log(newWord);
  }

  removeItem(word){
  for(var i = 0; i < this.words.length; i++) {
    if(this.words[i] == word){
      this.words.splice(i, 1);
      }
    }
  }

  editItem(word){
    console.log('yoooo')
    this.navCtrl.push(EditWordsPage);
  }

}
