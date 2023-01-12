import {Component, Input} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../_services/user.service";
import {IUser} from "../_interfaces/IUser";
import {Router} from "@angular/router";
import {first, Subscription} from "rxjs";
import {HttpService} from "../_services/http.service";



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  @Input() userList!:IUser[];
loginForm!: FormGroup;
  errorMessage: IUser| null=null;
  subscription!: Subscription;
  loggedIn: boolean=false;
  username!: IUser;


constructor(private formBuilder: FormBuilder,
            httpService:HttpService,
            private userService: UserService,
            private router: Router) {
  this.loginForm= this.formBuilder.group({
    username: ['',[Validators.required,Validators.minLength(3)]],
    password: ['',[Validators.required, Validators.minLength(4)]]
  })

  this.subscription=this.userService.getUsers().pipe(first()).subscribe(
    (data)=>{
      this.userList=data;
    }
  )
}
ngOnDestroy():void{
  //this.subscription=
}

  onSubmit() {
if(this.loginForm.invalid) return;

    if(this.loggedIn=true){
      this.userService.login(this.loginForm.value.username,
        this.loginForm.value.password);

    }else{
      console.error("Error occurred");
    }
  }

}
