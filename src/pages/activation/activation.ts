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
    this.startListening();
  }

  isIos() {
    return this.plt.is('ios');
  }

  stopListening() {
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
    console.log("Listening......")
    this.matchString = "listening for matches"

    this.speechRecognition.startListening().subscribe(matches => {
      this.matches = matches;
      this.matchString = matches[0]
      this.matchString = "match!"
      this.cd.detectChanges();
    });
    this.isRecording = true;
  }

  goToDeactivationPage() {
    this.navCtrl.push(DeactivationPage);
  }

}
