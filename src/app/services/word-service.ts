import {Word} from '../models/word';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable()
export class WordService {
    words: Array<any>;

    constructor(public storage: Storage){
      this.words = new Array<any>();

    }

    getWords(): Promise<Array<any>> {
      return this.storage.get('words').then((val) => {
          this.words = val != undefined ? val.map(d => {return d.data;}) : null;
          if (!this.words || this.words == []) {
              this.words = [];
          }
          return this.words;
      });
    }

    setWords(words){
      this.storage.set('words', words);
      console.log("stored words:")
      console.log(words)
    }

}
