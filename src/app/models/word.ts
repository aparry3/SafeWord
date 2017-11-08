export class Word {
    text: string;
    record_audio: boolean = false;
    send_location: boolean = false;
    delay:boolean = false;

    constructor(word: string) {
        this.text = word;
    }

}
