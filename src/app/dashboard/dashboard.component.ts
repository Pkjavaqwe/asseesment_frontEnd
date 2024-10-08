import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../services/user.service';
import { Subjects } from '../customclasses/subjects';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
   subjects:Subjects=[{  title: "",
    userId: {},
    questionPaper: []}]
   subjectTitles:string[]=[]
  routeUrl:string|undefined=""
constructor(private extractParam:ActivatedRoute, private userCrud:UserService  ){
  this.routeUrl = extractParam.snapshot.routeConfig?.path
  const extractedUserId = this.extractParam.snapshot.paramMap.get('_id')
  if (extractedUserId!=null) {
    const userId = extractedUserId
    console.log("userId",userId);
    const obsUserId = userCrud.callgetSubjectsByUserId(userId)
    obsUserId.subscribe({
      next:(data)=>{console.log("subData",data)
        this.subjects=data
        console.log("type",typeof data);
        console.log("length", data.length);
        console.log("subjectValue", );
        console.log();

       for(let eachdata of data){
        // this.subjectTitles=[]
        this.subjectTitles.push(eachdata['title'])
       }
      },
      error:(err)=>console.log(err)
    })
  }

}



}
