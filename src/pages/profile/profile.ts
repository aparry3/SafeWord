import { Component, ViewChild } from '@angular/core';
import { NavController,  List } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { SMS } from '@ionic-native/sms';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage2 {

  constructor(public navCtrl: NavController, private storage: Storage, private sms: SMS) {
      console.log(this.storage.get('words'));
      this.trigger()

  }

  trigger(){
    console.log('sending')
    this.sms.send('4043459807', 'Hello world!');
  }


}
