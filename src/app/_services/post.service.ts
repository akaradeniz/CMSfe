import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IPost} from "../_interfaces/IPost";
import {Observable, ReplaySubject} from "rxjs";
import {HttpService} from "./http.service";

@Injectable({
  providedIn: 'root'
})
export class PostService {


  constructor(private httpClient: HttpClient) { }

  getPosts(): Observable<IPost[]>{
    return this.httpClient.get<IPost[]>('http://localhost:8080/api/posts/posts/all')
  }

  addPost(post:IPost){
    return this.httpClient.post('http://localhost:8080/api/posts',post);
  }

  updatePost(updatedPost:IPost){
    return this.httpClient.put('http://localhost:8080/api/posts',updatedPost);
  }

  deletePost(id:number)
  {
    return this.httpClient.delete('http://localhost:8080/api/posts?id='+id);

  }

  getPostDetail(id:number){
    return this.httpClient.get<IPost>('http://localhost:8080/api/posts?id='+id);
  }
}
