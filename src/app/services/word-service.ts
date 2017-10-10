import {Word} from '../models/word';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable()
export class WordService {
    words: Array<object>;

    constructor(private storage: Storage){
      this.words = new Array<object>();

    }

    getWords(): Array<object>{
      this.storage.get('words').then((val) => {
          this.words = val;
          if (!this.words || this.words == []) {
              this.words = [];
          }
      });
      console.log("got words:")
      console.log(this.words)
      return this.words
    }

    setWords(words){
      this.storage.set('words', words);
      console.log("stored words:")
      console.log(words)
    }

}
