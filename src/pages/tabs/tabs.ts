import { Component } from '@angular/core';

import { ActivationPage } from '../activation/activation';
import { ContactPage } from '../contact/contact';
import { WordsPage } from '../words/words';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = WordsPage;
  tab2Root = ActivationPage;
  tab3Root = ContactPage;

  constructor() {

  }
}
