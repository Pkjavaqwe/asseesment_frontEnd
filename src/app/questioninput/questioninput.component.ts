import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Questions } from '../customclasses/questions';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../services/user.service';


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
  constructor(private extractParam:ActivatedRoute, private questionCrud:UserService, private route:Router){

    this.routeUrl=extractParam.snapshot.routeConfig?.path
    this.questionForm=new FormGroup({
      questionBody: new FormControl(this.questionn.questionBody),
       type: new FormControl(this.questionn.type),
       choices:new FormControl(this.questionn.choices),
        marksAlloted: new FormControl(this.questionn.marksAlloted),
        questionId:new FormControl(this.questionn.questionId),
         _id: new FormControl(this.questionn._id)
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

  collectQuestionData(){
     console.log(this.questionForm);
     const formchoicesArrayed = {
      ...this.questionForm.value,
      choices: this.questionForm.value.choices.split(',').map((choice: string) => choice.trim()), 
     };
    //  console.log(this.questionForm.value.paperName);
    // this.questionn=this.questionForm.value
    this.questionn=formchoicesArrayed
    const quepapId =  this.extractParam.snapshot.paramMap.get('_id')      
    this.questionn.questionId = quepapId
    console.log("changedquestionBody",this.questionn);
    
    if(this.routeUrl?.includes('questionsadd')) {
      console.log("in if of CollectQuestionData");
          this.addQuestion()
    } else {
     
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
}
