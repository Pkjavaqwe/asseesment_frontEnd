export class Questions {
    constructor(
        public questionBody:string="",
        public type:string="MCQ",
        public choices:string[]=[],
        public marksAlloted:number=0,
        public questionId:string|null="",
        public _id?:string
    ){ }
}
