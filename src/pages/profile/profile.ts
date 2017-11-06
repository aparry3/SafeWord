import { Component, ViewChild } from '@angular/core';
import { NavController,  List } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage2 {

  constructor(public navCtrl: NavController, private storage: Storage) {
      console.log(this.storage.get('words'));
      this.trigger()

  }

  trigger(){
    var matchString = "the secret word is of course just only bananas and not cake"
    var words = this.storage.get('words')
    words.then(function(words){
      for(var i = 0; i < words.length ; i++){
        var word = words[i].data.text
        console.log("checking " + word)
        if(matchString.indexOf(word) !== -1){
            console.log("triggered on " + word)
        }
      }

    })
  }


}
