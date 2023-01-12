import { Injectable } from '@angular/core';
import {HttpService} from "./http.service";
import {BehaviorSubject, first} from "rxjs";
import {IUser} from "../_interfaces/IUser";
import {Router} from "@angular/router";


@Injectable({
  providedIn: 'root'
})
export class UserService {

  $user= new BehaviorSubject<IUser | null>(null);
  user: IUser| null= null;
  $userList= new BehaviorSubject<IUser[] |null>(null);
  userList:IUser[]=[];
  constructor(private httpService: HttpService,
              private router:Router) {

  }

  public login(username:string, password:string){
    this.httpService.login(username, password).pipe(first()).subscribe({
      next:(user)=>{
        this.$user.next(user);
        this.router.navigate(['blog-post']);
      //this.user=user
      },
      error:(err)=>{
        console.error(err);
      }
    })
  }

  public registerUser(form:IUser){
    return this.httpService.register(form.firstname, form.lastname, form.email, form.username, form.password);

  }


  getUsers() {
    return this.httpService.getAllUsers()
  }

  newUser() {
    //TODO register
  }

  updateSelectedUser(id: string) {

  }

  deleteUser(id: string) {

 this.httpService.deleteUser(id).pipe(first()).subscribe(()=>{
   // @ts-ignore
   this.userList= [...this.$userList.getValue()];
   this.$userList.next(
     this.userList.filter(user=>user.id!== id)
   )
 });
  }

}
