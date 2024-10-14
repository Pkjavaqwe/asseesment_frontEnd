import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { User } from '../customclasses/user';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../services/user.service';
import { Customvalidator } from '../customclasses/customvalidator';
// import { ReactiveFormsModule,FormsModule } from '@angular/forms';
@Component({
  selector: 'app-userinput',
  templateUrl: './userinput.component.html',
  styleUrl: './userinput.component.css'
})
export class UserinputComponent {
 userForm:FormGroup
  user=new User()
  routeUrl:string|undefined = "";

  constructor(private extractParams : ActivatedRoute, private userCrud:UserService){
    this.routeUrl=extractParams.snapshot.routeConfig?.path
    this.userForm=new FormGroup({
      userName:new FormControl(this.user.userName,[ Validators.required,
              Validators.minLength(3),
              Validators.maxLength(20),
              Validators.pattern('^[a-zA-Z0-9]+$')]),
      email:new FormControl(this.user.email,[Validators.required]),
      contactNo:new FormControl(this.user.contactNo,[ Validators.required,
        Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')]),
      password:new FormControl(this.user.password,[    Validators.required,
        Validators.minLength(8),]),
      confirmPassword:new FormControl(this.user.confirmPassword,[Validators.required])
    },[Customvalidator.compare])
  }
   get userName(){
    return this.userForm.get('userName')
   }
   get email(){
    return this.userForm.get('email')
   }get contactNo(){
    return this.userForm.get('contactNo')
   }get password(){
    return this.userForm.get('password')
   }get confirmPassword(){
    return this.userForm.get('confirmPassword')
   }

   collectUserData(){
    // console.log(this.userForm)
    this.user=this.userForm.value
    if(this.routeUrl?.includes('register')){
      this.addUser()
    }
   }
   addUser(){
    const obsUserAdd=this.userCrud.callAddUser(this.user)
      obsUserAdd.subscribe({
        next:(nextValues)=>console.log(nextValues),
        error:(err)=>console.log(err)
      })   
   }
}
