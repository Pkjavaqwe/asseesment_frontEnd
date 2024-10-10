import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { Subjects } from '../customclasses/subjects';


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
  // routeUrl:string|undefined=""
  emptyToken:string|null=""
  // tokenPresent = JSON.stringify(localStorage.getItem("token"))


constructor(private extractParam:ActivatedRoute, private userCrud:UserService, private route:Router  ){

}

ngOnInit():void{
  this.emptyToken=localStorage.getItem('token')
  this.UserIdToPassToAddSubject = this.extractParam.snapshot.paramMap.get('_id')
  if (this.emptyToken!=null) {
    // this.routeUrl = this.extractParam.snapshot.routeConfig?.path
    console.log("tokenPresent",this.emptyToken);
    const extractedUserId = this.extractParam.snapshot.paramMap.get('_id')
    if (extractedUserId!=null) {
      const userId = extractedUserId
      console.log("userId",userId);
      const obsUserId = this.userCrud.callgetSubjectsByUserId(userId)
      obsUserId.subscribe({
        next:(data)=>{console.log("subData",data)
          this.subjects=data
          console.log("type",typeof data);
          console.log("length", data.length);
          console.log("subjectValue",this.subjects );
          console.log();
  
         for(let eachdata of data){
          // this.subjectTitles=[]
          this.subjectTitles.push(eachdata['title'])
         }
        },
        error:(err)=>console.log(err)
      })
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

}
