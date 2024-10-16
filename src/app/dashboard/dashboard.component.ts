import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { Subjects } from '../customclasses/subjects';
import { User } from '../customclasses/user';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
   subjects:Subjects[]=[{title:"",userId:"",_id:""}]
   subjectTitles:string[]=[]
   subjectIds:string[]=[]
   UserIdToPassToAddSubject:string|null=""
    totalSubjects:number=0
   loggedInUser:User={
    userName: '',
    email: '',
    contactNo: 0,
    password: '',
    confirmPassword: '',
    _id: ''
  }
  userId:string=""
  // allSubjects:Subjects[]=[{title:"",userId:"",_id:""}]
  // routeUrl:string|undefined=""
  emptyToken:string|null=""
  // tokenPresent = JSON.stringify(localStorage.getItem("token"))

  noSubjectYetMsg:string=""
constructor(private extractParam:ActivatedRoute, private userCrud:UserService, private route:Router  ){
}

ngOnInit():void{
  this.findGetById()
  this.emptyToken=localStorage.getItem('token')
  this.UserIdToPassToAddSubject = this.extractParam.snapshot.paramMap.get('_id')

  if (this.emptyToken!=null) {
    // this.routeUrl = this.extractParam.snapshot.routeConfig?.path
    console.log("tokenPresent",this.emptyToken);
    const extractedUserId = this.extractParam.snapshot.paramMap.get('_id')
    if (extractedUserId!=null) {
      this.userId = extractedUserId
      console.log("userId",this.userId);
      this.getSubjectByUsersId(this.userId)
    }
  }else{
    this.route.navigate(['']);
  }
}

logout(){
  localStorage.removeItem('token');
  this.emptyToken = localStorage.getItem('token')
  console.log("emptyToken",this.emptyToken);
  
  if (!this.emptyToken) {
    this.route.navigate(['']);
  }else{
    console.log("no the token is not removed")
  }
}

findGetById(){
  const extractedUserId = this.extractParam.snapshot.paramMap.get('_id')
  if(extractedUserId!=null){
    const obs = this.userCrud.callgetUserById(extractedUserId)
    obs.subscribe({
      next:(data)=>{
        console.log("user data by Id",data);
        this.loggedInUser=data
        
      },
      error:(error)=>{
        console.log("userById",error);
        
      }
    })
  }
}

deleteSubject(subId:string|undefined){
  const deleteAns=confirm("Do you really want to delete?")
  if(deleteAns){
    if(subId!=undefined){
 const obsDelete = this.userCrud.calldeleteSubjectById(subId)
 console.log("obsDelete====",obsDelete);
     obsDelete.subscribe({
      next:(obj)=>{
        console.log(obj)
        window.alert("subject deleted successfully")
        this.getSubjectByUsersId(this.userId)
     },
     error:(err)=>{
      console.log(err);
      window.alert("something went wrong deleting subject...")   
    }
  })
    }
   
  }

}
getSubjectByUsersId(userId:string){
  const obsUserId = this.userCrud.callgetSubjectsByUserId(userId)
  obsUserId.subscribe({
    next:(data)=>{console.log("subData",data)
      this.subjects=data
      console.log("type",typeof data);
      console.log("length", data.length);
      if(data.length==0){
        this.noSubjectYetMsg="No subject Yet"
      }
      this.totalSubjects=data.length
      console.log("subjectValue",this.subjects );
      // console.log();

     for(let eachdata of data){
      // this.subjectTitles=[]
      this.subjectTitles.push(eachdata['title'])
     }
    },
    error:(err)=>console.log(err)
  })
}

// @Output()
// emitter = new EventEmitter<number>()  

}


