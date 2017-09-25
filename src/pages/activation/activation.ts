import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-activation',
  templateUrl: 'activation.html'
})
export class ActivationPage {

  constructor(public navCtrl: NavController) {
    document.getElementById('insideButton').addEventListener('click', function listening() {
      if (document.getElementById('activationButton').classList.contains('deactivated')) {
        document.getElementById('insideButton').innerText = 'Listening';
        document.getElementById('insideButton').classList.remove('inactiveButton');
        document.getElementById('insideButton').classList.add('listeningButton');
        document.getElementById('activationButton').classList.remove('deactivated');
        document.getElementById('activationButton').classList.add('activated');
      } else {
        document.getElementById('insideButton').innerText = 'Inactive';
        document.getElementById('insideButton').classList.remove('listeningButton');
        document.getElementById('insideButton').classList.add('inactiveButton');
        document.getElementById('activationButton').classList.remove('activated');
        document.getElementById('activationButton').classList.add('deactivated');
      }
    })
  }
}
