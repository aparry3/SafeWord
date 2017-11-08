export class Word {
    word: {};
    constructor(public text: string){
      this.word = {'text': text,
                    'procedures':[]}
    }

    toObject(): object{
      return this.word;
    }

    setProcedures(procs: Array<object>){
      this.word['procedures'] = procs
    }

    setText(text: string){
      this.word['text'] = text
    }

    setWord(newWord: object){
      this.word = newWord;
    }


}
