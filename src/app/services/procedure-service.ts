import { Injectable } from '@angular/core';
import { SMS } from '@ionic-native/sms';
import { CallNumber } from '@ionic-native/call-number';

@Injectable()
export class ProcedureService {

    constructor(){

    }

    consume(word){
      if(word.record_audio == true){
        console.log("recording audio")
      }

      if(word.send_location == true){
        console.log("sending location")
      }

      if(word.delay == true){
        console.log("delaying")
      }

    }

}
