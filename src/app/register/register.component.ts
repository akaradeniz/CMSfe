import {Component, Input} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validator, Validators} from '@angular/forms';
import { IUser } from '../_interfaces/IUser';
import {Router} from "@angular/router";
import {UserService} from "../_services/user.service";
import {ErrorStateMatcher} from '@angular/material/core';



/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  registerForm!: FormGroup;
  errorMessage: IUser | null=null;
  //subscription: Subscription;
 allUser: IUser[] | any=[];
  matcher = new MyErrorStateMatcher();



  constructor(private formBuilder: FormBuilder,
              private router:Router,
              private userService:UserService) {
    this.registerForm = this.formBuilder.group({
      firstname: ['', [Validators.required, Validators.minLength(5)]],
      lastname: ['', Validators.required],
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [
        Validators.required,
        Validators.maxLength(10),
        Validators.minLength(5)
      ],
      ],
    });
  }

  onRegister() {
    if(this.registerForm.invalid) return;
this.userService.registerUser(this.registerForm.value as IUser).subscribe(res =>{
  console.log(res)
  this.router.navigate(['/login']);
});
//this.router.navigate(['/blog-post'])
  }

  onLogin() {
    this.router.navigate(['/login']);
  }

  getAllUser(){

  }

}
