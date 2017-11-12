import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { SpeechRecognition } from '@ionic-native/speech-recognition';
import { ChangeDetectorRef } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { WordService } from '../../app/services/word-service'
import { Word } from '../../app/models/word';
import { SMS } from '@ionic-native/sms';

@Component({
    selector: 'page-activation',
    templateUrl: 'activation.html'
})
export class ActivationPage {
    active: boolean = false;

  matches: String[];
  matchString = "";
  isRecording = false;
  words: Array<Word>;

  constructor(public navCtrl: NavController, private speechRecognition: SpeechRecognition,
              private plt: Platform, private cd: ChangeDetectorRef, public wordService: WordService,
            public sms: SMS) {
    this.wordService.getWords().then((d) => {
        this.words = d;
        console.log(this.words)
        var wordsToMatch = "";

        for(var i = 0; i < this.words.length; i++) {
              wordsToMatch = wordsToMatch + this.words[i]['word'].get('text') + ' ';
            }

        this.matchString = wordsToMatch;
        this.getPermission();
    });

  }

  isIos() {
    return this.plt.is('ios');
  }

  listening() {
      this.active = !this.active;
      if(this.active){
        this.startListening();
      } else {
        this.stopListening();
      }
  }

  listening2() {
      this.active = !this.active;
      if(this.active){
        this.listenLoop();
      } else {
        this.stopListening();
      }
  }

  stopListening() {
    console.log("Stopped listening.")
    this.speechRecognition.stopListening().then(() => {
      this.isRecording = false;
    });
  }

  getPermission() {
    this.speechRecognition.hasPermission()
      .then((hasPermission: boolean) => {
        if (!hasPermission) {
          this.speechRecognition.requestPermission();
        }
      });
  }

  startListening() {
    let options = {
      language: 'en-US'
    }
    console.log("Listening......");
    //setTimeout(this.stopListening(), 500);

    this.speechRecognition.startListening(options).subscribe(matches => {
      this.matches = matches;
      this.matchString = matches.join(' ');
      this.cd.detectChanges();
      this.trigger(this.matchString)
    }, error => console.error(error));
    this.cd.detectChanges();
    this.cd.markForCheck();
    this.isRecording = true;
  }

  listenLoop(){
    console.log("Entering listen loop");
    while(this.active){
      this.startListening();
      setTimeout(this.stopListening(), 5000);
      this.cd.detectChanges();
      this.cd.markForCheck();
    }
  }

  trigger(matchString){
    var self = this
    console.log("matchString: ", matchString)
    this.wordService.getWords().then(function(wordObjects){
      console.log('getWords returned' + wordObjects);
      for(var i = 0; i < wordObjects.length ; i++) {
        var text = wordObjects[i].text;
        var word = wordObjects[i];
        console.log("OBJ: ", word)
        console.log("HEY text: ", text)
        if (text && matchString) {
          console.log('text and matchString exist')
          text = text.toLowerCase();
          if (!!~matchString.indexOf(text)) {
            console.log('matched on ', text)
            self.consume(wordObjects[i]);
          }
        }
      }
    });
  }

  consume(word){
    if(word.record_audio == true){
      console.log("recording audio")
    }

    if(word.send_location == true){
      console.log("sending location")
        this.sms.send('4043459807', 'Hello world!');
    }

    if(word.delay == true){
      console.log("delaying")
    }
  }

}
