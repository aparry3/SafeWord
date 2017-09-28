import { Component, ViewChild } from '@angular/core';
import { NavController,  ModalController, NavParams, List } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { EditContactPage } from '../edit-contact/edit-contact';

@Component({
  selector: 'page-contacts',
  templateUrl: 'contact.html',
  entryComponents:[EditContactPage]
})
export class ContactPage {

  contacts: Array<object> = [];
  constructor(public navCtrl: NavController, public navParams: NavParams,
      public modalCtrl: ModalController, private storage: Storage) {
        this.storage.get('contacts').then((val) => {
            this.contacts = val;
            if (!this.contacts || this.contacts == []) {
                this.contacts = [];
            }
        });
  }

  removeItem(contact){
      for(var i = 0; i < this.contacts.length; i++) {
          if(this.contacts[i] == contact){
              this.contacts.splice(i, 1);
          }
      }
      this.storage.set('contacts', this.contacts);

  }

  editItem(edit_contact, is_new){
      let orig_contact = Object.assign({}, edit_contact.data);
      let modal = this.modalCtrl.create(EditContactPage, {
          contact: edit_contact.data,
          edit: !is_new
      });
      modal.onDidDismiss(data => {
          console.log(data);
          edit_contact.data = data.contact;
          if (data.cancel) {
              edit_contact.data = orig_contact;
              if (is_new) {
                  this.removeItem(edit_contact);
                  console.log(this.contacts);
              }
          }
          this.storage.set('contacts', this.contacts);
      });
      modal.present();
  }
  newContact(){
      var new_contact = {data: {name: ''}}
      this.contacts.push(new_contact)
      this.editItem(new_contact, true);

  }

}
