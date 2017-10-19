import { Injectable } from '@angular/core';

@Injectable()
export class ProcedureService {

    constructor(){

    }

    consume(word){
      var contact = word.get("contact");
      var procedure = word.get("procedure");

      console.log("contacting " + contact + " using procedure: " + procedure);
    }

}
