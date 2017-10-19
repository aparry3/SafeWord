import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';

import { WordService } from './services/word-service';
import { ContactService } from './services/contact-service';
import { ProcedureService } from './services/procedure-service';

@Component({
  templateUrl: 'app.html',
  providers:[WordService,
            ContactService,
            ProcedureService]
})
export class MyApp {
  rootPage:any = TabsPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,
    wordService: WordService, contactService: ContactService, procedureService: ProcedureService) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
