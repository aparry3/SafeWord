import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable()
export class ContactService {
    contacts: Array<object>;

    constructor(private storage: Storage){
      this.contacts = new Array<object>();

    }

    getWords(): Array<object>{
      this.storage.get('contacts').then((val) => {
          this.contacts = val;
          if (!this.contacts || this.contacts == []) {
              this.contacts = [];
          }
      });
      console.log("got words:")
      console.log(this.contacts)
      return this.contacts
    }

    setWords(words){
      this.storage.set('contacts', words);
      console.log("stored contacts:")
      console.log(words)
    }

}
