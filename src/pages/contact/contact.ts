import { Component, ViewChild } from '@angular/core';
import { NavController,  ModalController, NavParams, List } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { EditContactPage } from '../edit-contact/edit-contact';
import { ContactService } from '../../app/services/contact-service';
import { Contact } from '../../app/models/contact';

@Component({
  selector: 'page-contacts',
  templateUrl: 'contact.html',
  entryComponents:[EditContactPage]
})
export class ContactPage {

  contacts: Array<Contact> = [];
  constructor(public navCtrl: NavController, public navParams: NavParams,
      public modalCtrl: ModalController, private contactService: ContactService) {
        contactService.getContacts().then((val) => {
            this.contacts = val;
        });
  }

  removeItem(contact){
      for(var i = 0; i < this.contacts.length; i++) {
          if(this.contacts[i] == contact){
              this.contacts.splice(i, 1);
          }
      }
      this.contactService.setContacts(this.contacts);

  }

  editItem(edit_contact, is_new){
      let orig_contact = new Contact('');
      orig_contact = edit_contact;
      let modal = this.modalCtrl.create(EditContactPage, {
          contact: edit_contact,
          edit: !is_new
      });
      modal.onDidDismiss(data => {
          console.log(data);
          edit_contact = data.contact;
          if (data.cancel) {
              edit_contact = orig_contact;
              if (is_new) {
                  this.removeItem(edit_contact);
                  console.log(this.contacts);
              }
          }
          this.contactService.setContacts(this.contacts);
      });
      modal.present();
  }
  newContact(){
      var new_contact = new Contact('');
      this.contacts.push(new_contact)
      this.editItem(new_contact, true);

  }

}
