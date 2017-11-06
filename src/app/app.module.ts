import { NgModule, ErrorHandler } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { IonicStorageModule } from '@ionic/storage';

import { ActivationPage } from '../pages/activation/activation';
import { ContactPage } from '../pages/contact/contact';
import { WordsPage } from '../pages/words/words';
import { ProfilePage2 } from '../pages/profile/profile';
import { TabsPage } from '../pages/tabs/tabs';
import { EditWordsPage } from '../pages/edit-words/edit-words';
import { EditContactPage } from '../pages/edit-contact/edit-contact';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { SpeechRecognition } from '@ionic-native/speech-recognition';
import { Observable } from 'rxjs/Observable';

import { SMS } from '@ionic-native/sms';

@NgModule({
  declarations: [
    MyApp,
    ActivationPage,
    EditWordsPage,
    EditContactPage,
    ContactPage,
    WordsPage,
    TabsPage,
    ProfilePage2
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ActivationPage,
    EditWordsPage,
    EditContactPage,
    ContactPage,
    WordsPage,
    TabsPage,
    ProfilePage2
  ],
  providers: [
    StatusBar,
    SplashScreen,
    SpeechRecognition,
    SMS,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
