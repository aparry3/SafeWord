export class Procedure {
    procedure: {};

    constructor(public func: string, public contacts: Array<object>){
      this.procedure = {'function':func,
                    'contact':contacts}
    }

    toObject(): object{
      return this.procedure;
    }

    setFunction(func: string){
      this.procedure['function'] = func
    }

    setContacts(contacts: Array<object>){
      this.procedure['contacts'] = contacts
    }

}
