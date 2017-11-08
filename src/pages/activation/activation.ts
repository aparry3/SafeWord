import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { SpeechRecognition } from '@ionic-native/speech-recognition';
import { ChangeDetectorRef } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { WordService } from '../../app/services/word-service'
import { Word } from '../../app/models/word';

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
              private plt: Platform, private cd: ChangeDetectorRef, public wordService: WordService) {
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


}
