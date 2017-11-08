import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Contact } from '../models/contact';
@Injectable()
export class ContactService {
    contacts: Array<Contact>;

    constructor(public storage: Storage){
      this.contacts = new Array<Contact>();

    }

    getContacts(): Promise<Array<Contact>> {
      return this.storage.get('contacts').then((val) => {
          this.contacts = val;
          if (!this.contacts || this.contacts == []) {
              this.contacts = [];
          }
          return this.contacts;
      });

    }

    setContacts(contacts){
      this.storage.set('contacts', contacts);
      console.log("stored contacts:")
      console.log(contacts)
    }

}
