import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../customclasses/user';
import { Observable, Subject } from 'rxjs';
import { Subjects } from '../customclasses/subjects';
import { Questions } from '../customclasses/questions';
import { Questionpapers } from '../customclasses/questionpapers';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl = "http://localhost:9090/users"
  constructor(private http:HttpClient) { }

  callAddUser(user:User):Observable<User>{
        return this.http.post<User>(this.baseUrl+'/add',user)
  }

  

  getUserByAName(userName:string):Observable<User>{
    console.log("in serviceUser");
    
      const data = this.http.get<User>(this.baseUrl+"/getbyname/"+userName)
      console.log("data",data);
      
      return data
  }

  callgetSubjectsByUserId(user_id:string):Observable<Subjects[]>{
    const data = this.http.get<Subjects[]>(this.baseUrl+"/sub/get/"+user_id)
    console.log("data",data);
    return data
  }

  callgetQuesionpaperBySubjectId(subject_id:string):Observable<Questionpapers[]>{
    const data = this.http.get<Questionpapers[]>(this.baseUrl+"/quepaper/get/"+subject_id)
    console.log("data",data);
    return data
  }

  callgetQuestionsByquestionId(subject_id:string):Observable<Questions[]>{
    const data = this.http.get<Questions[]>(this.baseUrl+"/que/get/"+subject_id)
    console.log("data",data);
    return data
  }
  
  calladdQuestionpapers(questionPaper:Questionpapers):Observable<Questionpapers>{
    return this.http.post<Questionpapers>(this.baseUrl+"/subjects/questionpaper/add",questionPaper)
  }

  calladdQuestion(question:Questions):Observable<Questions>{
    return this.http.post<Questions>(this.baseUrl+"/subjects/questionpaper/question/add",question)
  }


  calladdSubject(subject:Subjects):Observable<Subjects>{
    return this.http.post<Subjects>(this.baseUrl+"/subjects/add",subject)
  }
}


