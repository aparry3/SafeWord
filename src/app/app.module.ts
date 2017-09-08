import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { ActivationPage } from '../pages/activation/activation';
import { ContactPage } from '../pages/contact/contact';
import { WordsPage } from '../pages/words/words';
import { TabsPage } from '../pages/tabs/tabs';

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
    DeactivationPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
