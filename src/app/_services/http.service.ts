import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {IUser} from "../_interfaces/IUser";
import {Observable} from "rxjs";
import {IPost} from "../_interfaces/IPost";
import {ICommend} from "../_interfaces/ICommend";

@Injectable({
  providedIn: 'root'
})
export class HttpService {
apiUrlUser=`http://localhost:8080/api/usercms`
  constructor(private httpClient: HttpClient) { }

  public login(username:string, password: string): Observable<IUser>{
return this.httpClient.get(
  `http://localhost:8080/api/usercms?username=${username}&password=${password}`
) as Observable<IUser>
  }

public register(firstname:string, lastname:string, email:string, username:string, password:string): Observable<IUser>{
  return this.httpClient.post(this.apiUrlUser, {
    firstname:firstname,
    lastname:lastname,
    email:email,
    username:username,
    password:password
  })as Observable<IUser>;
}

getAllUsers():Observable<IUser[]>{
  return this.httpClient.get<IUser[]>('http://localhost:8080/api/usercms/ListOfUsers')
}
  deleteUser(id:string){
  return this.httpClient.delete(`http://localhost:8080/api/usercms?id=`+id);
}




}
