import { Component, ViewChild } from '@angular/core';
import { NavController,  ModalController, NavParams, List } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { EditWordsPage } from '../edit-words/edit-words';
import { WordService } from '../../app/services/word-service'
import { ContactService } from '../../app/services/contact-service'
import { Word } from '../../app/models/word';
import { Contact } from '../../app/models/contact';

@Component({
  selector: 'page-words',
  templateUrl: 'words.html',
  entryComponents:[EditWordsPage]
})
export class WordsPage {

  words: Array<Word> = [];
  contacts: Array<Contact> = [];
  constructor(public navCtrl: NavController, public navParams: NavParams,
      public modalCtrl: ModalController, private storage: Storage, private wordService: WordService,
    private contactService: ContactService) {
        wordService.getWords().then((d) => {
            this.words = d;
            console.log("here" + d);
        });

        contactService.getContacts().then((c) => {
            this.contacts = c;
            console.log("contacts:" + c);
        });

        this.test()
  }

  removeItem(word){
    for(var i = 0; i < this.words.length; i++) {
        if(this.words[i] == word){
            this.words.splice(i, 1);
        }
    }
    this.wordService.setWords(this.words);

  }

  editItem(edit_word, is_new){
      let orig_word = new Word('');
      let modal = this.modalCtrl.create(EditWordsPage, {
          word: edit_word,
          edit: !is_new
      });
      modal.onDidDismiss(data => {
          console.log(data);
          edit_word = data.word;
          if (data.cancel) {
              edit_word = orig_word;
              if (is_new) {
                  this.removeItem(edit_word);
                  console.log(this.words);
              }
          }
          this.wordService.setWords(this.words);
      });
      modal.present();
  }
  newWord(){
      var new_word = new Word('');
      this.words.push(new_word)
      this.editItem(new_word, true);

  }

  test(){

    this.wordService.getWords().then((d) => {
        this.words = d;
        console.log("here" + d);
    });

    this.contactService.getContacts().then((c) => {
        this.contacts = c;
        console.log("contacts:" + c);

        console.log("TEST")
        console.log("conats2: " + this.contacts)
        var word = "coffee"
        var phone = ""
        for(var i = 0; i < this.contacts.length ; i++){
            console.log("i: " + i)
            var contact = this.contacts[i];
            var cWords = contact.words
            if (cWords !== undefined){
              for(var j = 0; j < cWords.length ; j++){
                var w = cWords[j].text.toLowerCase()
                console.log("word: " + w + " j: " + j)
                if(w == word){
                  phone = contact.number
                }
              }
            }
          }
        console.log("phone: " + phone)
    });


  }

}
