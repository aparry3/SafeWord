import { Word } from './word';
export class Contact {
    name: string;
    number: string;
    words: Array<Word>;
    constructor(name: string) {
        this.name = name;
        this.words = [];
    }
}
