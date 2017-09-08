import { Component } from '@angular/core';

import { DeactivationPage } from '../deactivation/deactivation';
import { ContactPage } from '../contact/contact';
import { WordsPage } from '../words/words';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = WordsPage;
  tab2Root = DeactivationPage;
  tab3Root = ContactPage;

  constructor() {

  }
}
