import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../services/user.service';
import { Questions } from '../customclasses/questions';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrl: './questions.component.css'
})
export class QuestionsComponent {
      questions:Questions[]=[]
      questionPaper_id:string = ""
      totalMarks:number=0
      // noQuestionTet:string=""
      totalQuestions:number=0
      constructor(private extractIdinParam:ActivatedRoute, private userCrud:UserService){
        const que_id= extractIdinParam.snapshot.paramMap.get('_id')
        if(que_id!=null){
          this.questionPaper_id = que_id
         console.log("questionpp_id",this.questionPaper_id);
        this.fetchQuestionByPaperId(this.questionPaper_id)
      }
      }
      fetchQuestionByPaperId(quePaperId:string){

        const obsQuestion = this.userCrud.callgetQuestionsByquestionId(quePaperId)
        obsQuestion.subscribe({
          next:(questionfetched)=>{console.log(questionfetched);
            this.totalQuestions=questionfetched.length
            
            console.log("totalquestions",this.totalQuestions);
            
          this.questions=questionfetched
          console.log("question",this.questions);
          this.questions.forEach((element)=>{
            this.totalMarks=this.totalMarks+element.marksAlloted
            //  console.log(this);
           })
          },
          error:(err)=>console.log(err)
        }) 
      }
}
