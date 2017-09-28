import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import {DeactivationPage} from "../deactivation/deactivation";
import { SpeechRecognition } from '@ionic-native/speech-recognition';
import { ChangeDetectorRef } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'page-activation',
  templateUrl: 'activation.html'
})
export class ActivationPage {

  matches: String[];
  matchString = "";
  isRecording = false;

  constructor(public navCtrl: NavController, private speechRecognition: SpeechRecognition,
              private plt: Platform, private cd: ChangeDetectorRef) {
    this.matchString = "matches?";
    this.getPermission();
    this.startListening();
  }

  isIos() {
    return this.plt.is('ios');
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
      this.matchString = matches[0]
      this.matchString = "match!"
      this.cd.detectChanges();
    }, error => console.error(error));

    this.isRecording = true;
  }

  goToDeactivationPage() {
    this.stopListening();
    this.navCtrl.push(DeactivationPage);
  }

}
