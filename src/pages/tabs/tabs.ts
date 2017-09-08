import { Component } from '@angular/core';

import { DeactivationPage } from '../deactivation/deactivation';
import { ContactPage } from '../contact/contact';
import { WordsPage } from '../words/words';
import { ProfilePage2 } from '../profile/profile';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = WordsPage;
  tab2Root = DeactivationPage;
  tab3Root = ContactPage;
  tab4Root = ProfilePage2;

  constructor() {

  }
}
