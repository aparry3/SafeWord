import { Component, ViewChild } from '@angular/core';
import { NavController,  List } from 'ionic-angular';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage2 {

  words: any;

  constructor(public navCtrl: NavController) {

    this.words = [
      'Bread',
      'Milk',
      'Cheese',
      'Snacks',
      'Apples',
      'Bananas',
      'Peanut Butter',
      'Chocolate',
      'Avocado',
      'Vegemite',
      'Muffins',
      'Paper towels'
    ];

  }
}
