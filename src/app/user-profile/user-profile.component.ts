import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IUser} from "../_interfaces/IUser";
import {ActivatedRoute} from "@angular/router";
import {UserService} from "../_services/user.service";
import {HttpService} from "../_services/http.service";
import {first} from "rxjs";

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit{

@Input() users!:IUser; //goes through user-list html
  @Output() getUsers=new EventEmitter();
  @Output() openUserModule= new EventEmitter();



  constructor(private activatedRoute: ActivatedRoute,
              private userService:UserService,
              private httpService:HttpService) {
   const username =this.activatedRoute.snapshot.paramMap.get('username');
  }
  ngOnInit():void{
    console.log(this.users)
  }


  onDeleteClick() {
    this.httpService.deleteUser(this.users.id).pipe(first()).subscribe(
      res=>{
        console.log(res);
this.getUsers.emit();
      }
    )
  }

  onUpdateClick() {
    this.userService.updateSelectedUser(this.users.id);  }


}
