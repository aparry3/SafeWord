import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { SpeechRecognition } from '@ionic-native/speech-recognition';
import { ChangeDetectorRef } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { WordService } from '../../app/services/word-service'
import { ProcedureService } from '../../app/services/procedure-service'
import { ContactService } from '../../app/services/contact-service'
import { Word } from '../../app/models/word';
import { Contact } from '../../app/models/contact';
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
  contacts: Array<Contact>;

  constructor(public navCtrl: NavController, private speechRecognition: SpeechRecognition,
              private plt: Platform, private cd: ChangeDetectorRef, public wordService: WordService,
            public procService: ProcedureService, public contactService: ContactService, private sms: SMS) {
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

    this.contactService.getContacts().then((c) => {
        this.contacts = c;
        console.log(this.contacts)
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

    match(matchString, wordsToMatch): Array<object>{
      var matches = [];

      for(var i = 0; i < this.words.length; i++) {
            if(matchString.includes(this.words[i])){
              matches.push(this.words[i]);
            }
          }
      return matches;
  }


  trigger(matchString){
      console.log("hello " + matchString);
      matchString = matchString.toLowerCase();
      for(var i = 0; i < this.words.length ; i++){
        var word = this.words[i].text.toLowerCase()
        if(matchString.indexOf(word) !== -1){
            this.consume(this.words[i])
            console.log("hello from text");
        }
      }

  }

  consume(word){

    if(word.record_audio == true){
      console.log("recording audio")
    }

    if(word.send_location == true){
      console.log("sending location")

      this.wordService.getWords().then((d) => {
          this.words = d;
          console.log("here" + d);
      });

      this.contactService.getContacts().then((c) => {
          this.contacts = c;
          console.log("contacts:" + c);

          console.log("TEST")
          console.log("conats2: " + this.contacts)
          var word = word.text
          var phone = ""
          for(var i = 0; i < this.contacts.length ; i++){
              console.log("i: " + i)
              var contact = this.contacts[i];
              var cWords = contact.words
              if (cWords !== undefined){
                for(var j = 0; j < cWords.length ; j++){
                  var w = cWords[j].text.toLowerCase()
                  console.log("word: " + w + " j: " + j)
                  if(w == word){
                    phone = contact.number
                  }
                }
              }
            }
          console.log("phone: " + phone)
          this.sms.send(phone, word.text);
      });
    }

    if(word.delay == true){
      console.log("delaying")
    }

  }



}
