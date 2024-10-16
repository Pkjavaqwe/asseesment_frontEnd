export class Questions {
    constructor(
        public questionBody:string="",
        public type:string="MCQ",
        public choices:string[]=[],
        public marksAlloted:number=0,
        public questionId:string|null="",
        public _id?:string,
        public timestamp=Questions.getDateTimeLocal(new Date())
        
    ){ }
    static getDateTimeLocal(d:Date){
        return  (new Date(d.getTime() - d.getTimezoneOffset() * 60000).toISOString()).slice(0, -1);
    }
}
