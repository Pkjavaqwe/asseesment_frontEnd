import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { Questionpapers } from '../customclasses/questionpapers';

@Component({
  selector: 'app-questionpapers',
  templateUrl: './questionpapers.component.html',
  styleUrl: './questionpapers.component.css'
})
export class QuestionpapersComponent {
  subject_id:string = ""
  noQuestionPaperYet:string=""
  questionPapers:Questionpapers[]=[{paperName:"", subjectId:"",_id:""}]
  totalQuestion:number=0
  constructor(private extractIdinParam:ActivatedRoute, private userCrud:UserService){
    const sub_id= extractIdinParam.snapshot.paramMap.get('_id')
    if(sub_id!=null){
        this.subject_id = sub_id
       console.log("subject_Id",this.subject_id);
    }
    this.fetchQuestionPaperBySUbjectId(this.subject_id)
  }
  fetchQuestionPaperBySUbjectId(subId:string){
      const obsQuestion = this.userCrud.callgetQuesionpaperBySubjectId(subId)
      obsQuestion.subscribe({
        next:(questionPapersfetched)=>{console.log(questionPapersfetched);
        this.questionPapers=questionPapersfetched
            if(questionPapersfetched.length==0){
              this.totalQuestion=questionPapersfetched.length
              this.noQuestionPaperYet="No QuestionPaper Yet"
            }
        console.log("questionPaper",this.questionPapers);
        },
        error:(err)=>console.log(err)
      }) 
    }
}
