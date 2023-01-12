import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ICommend} from "../_interfaces/ICommend";

@Injectable({
  providedIn: 'root'
})
export class CommendService {

  constructor(private httpClient:HttpClient) { }

  getCommends(): Observable<ICommend[]> {
    return this.httpClient.get<ICommend[]>('http://localhost:8080/api/commend/commend/all');
  }

  // createCommend(id:number,author:string, body:string,index:number):Observable<ICommend>{
  //   return this.httpClient.post('http://localhost:8080/api/commend',{
  //     id:id,
  //     author:author,
  //     body:body,
  //     index:index
  //   })as Observable<ICommend>;
  // }

  createCommend(commend:ICommend, postId:number){
    return this.httpClient.post('http://localhost:8080/api/commend?postId='+postId,commend)
  }

  deleteCommend(id:string){
    return this.httpClient.delete('http://localhost:8080/api/commend?id=' +id);
  }

  updateCommend(updatedCommend:ICommend,postId:number){
    return this.httpClient.put('http://localhost:8080/api/commend'+postId,updatedCommend);
  }
}
