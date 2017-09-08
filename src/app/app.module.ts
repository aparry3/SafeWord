import { NgModule, ErrorHandler } from '@angular/core';
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
<<<<<<< HEAD
    EditWordsPage
=======
    ProfilePage2,
    DeactivationPage
>>>>>>> master
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
