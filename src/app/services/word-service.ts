import {Word} from '../models/word';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable()
export class WordService {
    words: Array<Word>;

    constructor(public storage: Storage){
      this.words = new Array<Word>();

    }

    getWords(): Promise<Array<Word>> {
      return this.storage.get('words').then((val) => {
          console.log("debug" + val);
          this.words = val;
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
