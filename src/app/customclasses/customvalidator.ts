import { AbstractControl, ValidationErrors } from "@angular/forms";

export class Customvalidator {
    static compare( control:AbstractControl) :ValidationErrors | null{
        const password=control.get('password')?.value
        const confirmPassword=control.get('confirmPassword')?.value
        if(password!=confirmPassword)
           return {noMatch:true}
        else
        return null;

   }
}
