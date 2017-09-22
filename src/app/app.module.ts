import { NgModule, ErrorHandler } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { ActivationPage } from '../pages/activation/activation';
import { ContactPage } from '../pages/contact/contact';
import { WordsPage } from '../pages/words/words';
import { ProfilePage2 } from '../pages/profile/profile';
import { TabsPage } from '../pages/tabs/tabs';
import { EditWordsPage } from '../pages/edit-words/edit-words';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {DeactivationPage} from "../pages/deactivation/deactivation";

import { SpeechRecognition } from '@ionic-native/speech-recognition';
import { Observable } from 'rxjs/Observable';

@NgModule({
  declarations: [
    MyApp,
    ActivationPage,
    ContactPage,
    WordsPage,
    TabsPage,
    EditWordsPage,
    ProfilePage2,
    DeactivationPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ActivationPage,
    ContactPage,
    WordsPage,
    TabsPage,
    EditWordsPage,
    ProfilePage2,
    DeactivationPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    SpeechRecognition,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
