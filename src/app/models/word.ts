import { Contact } from './contact';
export class Word {
    text: string;
    record_audio: boolean = false;
    send_location: boolean = false;
    delay:boolean = false;
    contacts: Array<Contact>;
    constructor(word: string) {
        this.text = word;
        this.contacts = [];
    }

}
