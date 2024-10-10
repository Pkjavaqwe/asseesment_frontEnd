import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subjects } from '../customclasses/subjects';

@Component({
  selector: 'app-subjectinput',
  templateUrl: './subjectinput.component.html',
  styleUrl: './subjectinput.component.css'
})
export class SubjectinputComponent {
  subjectForm: FormGroup;
  subject=new Subjects()
  usersId:string|null=""
  routeUrl?:string|undefined=""
  constructor(private subjectCrud: UserService, private router: Router,private extractParam:ActivatedRoute) {
   
    this.routeUrl=extractParam.snapshot.routeConfig?.path
    this.subjectForm = new FormGroup({
      title: new FormControl(this.subject.title, [Validators.required, Validators.maxLength(100)]),
      userId: new FormControl(this.subject.userId, Validators.required),
    });
  }
  
  get title() {
    return this.subjectForm.get('title');
  }
  get userId() {
    return this.subjectForm.get('userId');
  }
  get _id() {
    return this.subjectForm.get('_id');
  }

  collectSubjectData(){
    console.log(this.subjectForm.value)
    this.subject=this.subjectForm.value
    const user__Id =  this.extractParam.snapshot.paramMap.get('_id')      
    this.subject.userId = user__Id
    if (this.routeUrl?.includes('subjectsadd')) {
      this.addSubject()
    } else {
      
    }
       
  }
  addSubject(){
    console.log("in addQuestion");
    const {_id,...partialSubject}=this.subject     
    const questionAddObs = this.subjectCrud.calladdSubject(partialSubject)
    questionAddObs.subscribe({
      next:(data)=>{console.log(data);
        console.log("addSubject subscribe");
      },
      error:(error)=>{console.log("error",error);
      }
    })
  }
}
