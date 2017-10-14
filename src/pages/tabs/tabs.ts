import { Component } from '@angular/core';

import { ActivationPage } from '../activation/activation';
import { ContactPage } from '../contact/contact';
import { WordsPage } from '../words/words';
import { ProfilePage2 } from '../profile/profile';
import { SettingsPage } from "../settings/settings";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = WordsPage;
  tab2Root = ActivationPage;
  tab3Root = ContactPage;
  tab4Root = ProfilePage2;
  tab5Root = SettingsPage;

  constructor() {

  }
}
