export class Contact {
    contact: {};

    constructor(public name: string){
      this.contact = {'name':name,
                    'number':'number'}
    }

    toObject(): object{
      return this.contact;
    }

    setName(name: string){
      this.contact['name'] = name
    }

    setNumber(number: string){
      this.contact['number'] = number
    }

}
