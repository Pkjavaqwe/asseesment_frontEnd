import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Questionpapers } from '../customclasses/questionpapers';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-paperinput',
  templateUrl: './paperinput.component.html',
  styleUrl: './paperinput.component.css'
})
export class PaperinputComponent {
  paperForm:FormGroup
  paper = new Questionpapers()
  routeUrl:string|undefined = "";
  constructor(private extractParam:ActivatedRoute, private questionCrud:UserService, private route:Router){

    this.routeUrl=extractParam.snapshot.routeConfig?.path
    this.paperForm=new FormGroup({
      paperName:new FormControl(this.paper.paperName),
      subjectId: new FormControl(this.paper.subjectId),
      _id:new FormControl(this.paper._id)
    })
  }
  get paperName(){
    return this.paperForm.get('paperName')
  }
  get subjectId(){
    return this.paperForm.get('subjectId')
  }
  get _id(){
    return this.paperForm.get('_id')
  }

  collectData(){
    console.log(this.paperForm.value.paperName);
    this.paper.paperName=this.paperForm.value.paperName
    const subjectIdFromParam =  this.extractParam.snapshot.paramMap.get('_id')  
    this.paper.subjectId = subjectIdFromParam 
    if(this.routeUrl?.includes('questionpapersadd')) {
      console.log("in collectData if")
          this.addPaper()
    } else {
    }
  }

  addPaper(){
    console.log("in addPaper ");
    const {_id,...partialPaper}=this.paper
    const paperAddedObservable = this.questionCrud.calladdQuestionpapers(partialPaper)
    paperAddedObservable.subscribe({
      next:(data)=>{console.log(data);
      },
      error:(error)=>{console.log(error);
      }
    })
  }
}
