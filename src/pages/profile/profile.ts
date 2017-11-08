import { Component, ViewChild } from '@angular/core';
import { NavController,  List } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { SMS } from '@ionic-native/sms';
import { CallNumber } from '@ionic-native/call-number';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage2 {

  constructor(public navCtrl: NavController, private storage: Storage, private sms: SMS, private callNumber: CallNumber) {
      console.log(this.storage.get('words'));
      this.trigger()

  }

  async trigger(){
    this.callNumber.callNumber("4043459807", true)
  .then(() => console.log('Launched dialer!'))
  .catch(() => console.log('Error launching dialer'));

    try{
      console.log('sending')
    await this.sms.send('4043459807', 'Hello world!');
  } catch(e) {
    console.log(e)
  }
  }


}
