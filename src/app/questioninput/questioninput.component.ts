import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Questions } from '../customclasses/questions';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { timestamp } from 'rxjs';


@Component({
  selector: 'app-questioninput',
  templateUrl: './questioninput.component.html',
  styleUrl: './questioninput.component.css'
})
export class QuestioninputComponent {
  questionForm:FormGroup
  questionn = new Questions()
  questionTypes: string[] = ["mcq", "descriptive"]
  routeUrl?:string|undefined=""
  // questionIdToPatch:string|null=""
  constructor(private extractParam:ActivatedRoute, private questionCrud:UserService, private route:Router){

    this.routeUrl=extractParam.snapshot.routeConfig?.path
    
    const idFromParams=extractParam.snapshot.paramMap.get('_id')
    if (this.routeUrl?.includes('updatequestion')) {
      if (idFromParams!=null) {
        this.getQuestionById(idFromParams)
      }
    }
    
    this.questionForm=new FormGroup({
      questionBody: new FormControl(this.questionn.questionBody),
       type: new FormControl(this.questionn.type),
       choices:new FormControl(this.questionn.choices),
        marksAlloted: new FormControl(this.questionn.marksAlloted),
        questionId:new FormControl(this.questionn.questionId),
         _id: new FormControl(this.questionn._id),
         timestamp:new FormControl(this.questionn.timestamp),
    })

  }
  get questionBody(){
    return this.questionForm.get('questionBody')
  }
  get type(){
    return this.questionForm.get('type')
  }
  get choices(){
    return this.questionForm.get('choices')
  }
  get marksAlloted(){
    return this.questionForm.get('marksAlloted')
  }
  get questionId(){
    return this.questionForm.get('questionId')
  }
  get timestamp(){
    return this.questionForm.get('timestamp')
  }

  collectQuestionData(){
     console.log("question-Form",this.questionForm);
    //  if(this.questionForm.value.choices)
    // if(){
  
    // }
    // if(this.questionForm.value.paperName!=""){
      
    // }
    let formchoicesArrayed = {
      ...this.questionForm.value
     }
    if (this.questionForm.value.choices=="") {
      formchoicesArrayed = {
        ...this.questionForm.value,
       };
    } else {
      formchoicesArrayed = {
        ...this.questionForm.value,
        choices: this.questionForm.value.choices.split(',').map((choice: string) => choice.trim()), 
       };
    }

    //  console.log(this.questionForm.value.paperName);
    // this.questionn=this.questionForm.value
    this.questionn=formchoicesArrayed
    console.log("changedquestionBody",this.questionn);
    if(this.routeUrl?.includes('questionsadd')) {
      const quepapId =  this.extractParam.snapshot.paramMap.get('_id')      
      this.questionn.questionId = quepapId
      console.log("in if of CollectQuestionData");
          this.addQuestion()
    } else { 
      const questionId = this.extractParam.snapshot.paramMap.get('_id')   
      if (questionId!=null) {
        this.getQuestionById(questionId)
      this.updateQuestion()   
      }
    }
  }
  addQuestion(){
    console.log("in addQuestion");
    const {_id,...partialquestion}=this.questionn

    const questionAddObs = this.questionCrud.calladdQuestion(partialquestion)
    questionAddObs.subscribe({
      next:(data)=>{console.log(data);
        console.log("addQuestion subscribe");
      },
      error:(error)=>{console.log("error",error);
      }
    })
  }
  getQuestionById(queId:string|null){
    if(queId!=null){
       const obs = this.questionCrud.callgetQuestionById(queId)
       obs.subscribe({
        next:(question)=>{
          console.log("questionFetched",question);
          let dateCreated =question.timestamp
          question.timestamp=dateCreated.slice(0,dateCreated.length-5)
          this.questionForm.patchValue(question)
        },
        error:(err=>{
          console.log(err);
          window.alert("something went wrong while fetching one Question")        
        })
      })
    }
  }

  updateQuestion(){
    console.log("question in update",this.questionn)
    const obsUpdate = this.questionCrud.callUpdateQuestion(this.questionn)
    obsUpdate.subscribe({
     next:(obj)=>{
       console.log(obj);
       window.alert(`Employee with id ${this.questionn._id} updated successfully....`)
       this.route.navigate([]);
     },
     error: (err)=>{
       console.log(err); 
       window.alert("something went wrong while updating...")
     }
    })
  }
}
