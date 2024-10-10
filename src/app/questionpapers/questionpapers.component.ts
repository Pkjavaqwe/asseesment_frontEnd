import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-questionpapers',
  templateUrl: './questionpapers.component.html',
  styleUrl: './questionpapers.component.css'
})
export class QuestionpapersComponent {
  subject_id:string = ""
  constructor(private extractIdinParam:ActivatedRoute, private userCrud:UserService){
    const sub_id= extractIdinParam.snapshot.paramMap.get('_id')
    if(sub_id!=null){
        this.subject_id = sub_id
       console.log("subject_Id",this.subject_id);
    }
    this.fetchQuestionBySUbjectId(this.subject_id)

  }
  fetchQuestionBySUbjectId(subId:string){
      const obsQuestion = this.userCrud.callgetQuesionpaperBySubjectId(subId)
      obsQuestion.subscribe({
        next:(questionsfetched)=>{console.log(questionsfetched);
        },
        error:(err)=>console.log(err)
      }) 
    }
}
