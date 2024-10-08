import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../customclasses/user';
import { Observable, Subject } from 'rxjs';
import { Subjects } from '../customclasses/subjects';

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

  callgetSubjectsByUserId(user_id:string):Observable<any[]>{
    const data = this.http.get<any[]>(this.baseUrl+"/sub/get/"+user_id)
    console.log("data",data);
    return data
  }

  
}


