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
      selectedYear:number|null=null
      availableYears: number[] = [2020, 2021, 2022, 2023, 2024]
      monthNames: string[] = [
        'January', 'February', 'March', 'April', 'May', 'June', 
        'July', 'August', 'September', 'October', 'November', 'December'
      ]
      weeklyStats: any[] = [];
      monthlyStats: any[] = [];
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

      deleteQuestion(queId:string|undefined){
        const deleteAns=confirm("Do you really want to delete?")
        if(deleteAns){
            if(queId!=undefined){
                  const obsDelete = this.userCrud.calldeleteQuestionById(queId)
                  console.log("obsDelete====",obsDelete);
              obsDelete.subscribe({
                  next:(obj)=>{
                    console.log(obj)
                    window.alert("question deleted successfully")
                    // this.getSubjectByUsersId(this.userId)
                    this.fetchQuestionByPaperId(this.questionPaper_id)
                  },
                    error:(err)=>{
                      console.log(err);
                      window.alert("something went wrong deleting question...")   
                    }
              })
          }  
        }
      }
      
      filterStatistics(){
        if (this.selectedYear) {
          this.getWeeklyStats();
          this.getMonthlyStats();
        }
      }
      getWeeklyStats(){
        this.userCrud.getWeeklyStatistics(this.selectedYear).subscribe(stats => {
          console.log("weeklyStats----",stats);
          
          this.weeklyStats = stats;
        });
      }
      getMonthlyStats(){
        this.userCrud.getMonthlyStatistics(this.selectedYear).subscribe(stats => {
          console.log("monthlyStats",stats);
          this.monthlyStats = stats;
        });
      }

     
}
