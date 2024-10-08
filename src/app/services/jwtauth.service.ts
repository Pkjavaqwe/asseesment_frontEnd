import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login } from '../customclasses/login';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JwtauthService {
baseUrl = "http://localhost:9090/login"
  constructor(private http:HttpClient) { }

  authLogin(loginData:Login):Observable<Login>{
   const data = this.http.post<Login>(this.baseUrl+"/auth",loginData)
   return data;
  }
}
