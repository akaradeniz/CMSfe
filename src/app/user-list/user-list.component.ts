import { Component } from '@angular/core';
import {IUser} from "../_interfaces/IUser";
import {UserService} from "../_services/user.service";
import {map, Observable} from "rxjs";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
userList!: IUser[] ;
displayList! :IUser[];
  searchText: string = "";

constructor(private userService:UserService) {
  this.userService.getUsers().subscribe(res =>{
    this.userList = res;
    this.displayList = res
  })

}

  ngOnInit(){

  }


  filterList(searchText: any) {
    this.displayList = this.userList.filter((contact) => {
      return this.userList.includes(searchText);
    })
  }

  onClick() {
    this.userService.newUser();
  }
}
