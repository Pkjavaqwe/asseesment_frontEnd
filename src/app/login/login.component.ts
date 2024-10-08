import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Login } from '../customclasses/login';
import { User } from '../customclasses/user';
import { JwtauthService } from '../services/jwtauth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm:FormGroup
  login =new Login
  accessToken:Object = {}
  userData:User={
    userName: '',
    email: '',
    contactNo: 0,
    password: '',
    confirmPassword: '',
    _id: ''
  }
  userId:string=""
constructor(private authService:JwtauthService,private userCrud:UserService){
 
  this.loginForm=new FormGroup({
    userName:new FormControl(this.login.userName),
    password:new FormControl(this.login.password) 
  })
}
collectloginData(){
  // console.log(this.userForm)
  this.login=this.loginForm.value
  console.log(this.login);
  
  const obsoneData = this.userCrud.getUserByAName(this.login.userName)
  console.log("obsoneData",obsoneData);
 
  obsoneData.subscribe({
    next:(nextData)=>{
      // this.userData=nextData.
      console.log("nextData",nextData)
      console.log("nextData _id",nextData._id) 
      // this.userId=nextData._id
      this.userData=nextData
    },
    error:(err)=>console.log(err)
   })
 }

 loginUser(){
  if(this.login.password&&this.login.userName){
     const postDataObs = this.authService.authLogin(this.login)
     postDataObs.subscribe({
      next:(data)=>{console.log(data)
        console.log(typeof data);
         this.accessToken=data
        
      },
      error:(error)=>{console.log(error);
      }
     })
    }
}
}
