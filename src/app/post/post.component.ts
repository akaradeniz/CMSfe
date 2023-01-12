import {Component, EventEmitter, Input, Output} from '@angular/core';
import {IPost} from "../_interfaces/IPost";
import {IUser} from "../_interfaces/IUser";
import {PostService} from "../_services/post.service";
import {first, Subscription} from "rxjs";
import {ICommend} from "../_interfaces/ICommend";
import {MatDialog} from "@angular/material/dialog";
import {CommendInputComponent} from "../commend-input/commend-input.component";
import {HttpService} from "../_services/http.service";
import {CommendService} from "../_services/commend.service";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
  @Input() posts!:IPost;
  @Output() openPostModule=new EventEmitter();
  @Output() getPosts=new EventEmitter();
  body!: IPost;
  title!: IPost;
  author!:IUser;
  createdDate!:IPost;
  updatedDate!:IPost;
 // private subscribe: Subscription;
  commends!: ICommend[];

  constructor(public dialog: MatDialog,
    private postService:PostService,
              private commendService:CommendService) {
//this.subscribe=this.posts.
  }
  openCommendModule(commend:any){
    this.dialog.open(CommendInputComponent);
    this.getCommends();
  }

  deletePost(id:number) {
this.postService.deletePost(id).subscribe(res =>{
  console.log(res);
  this.getPosts.emit();

})
  }
  editPost(updatedPost:IPost){
    this.openPostModule.emit(updatedPost);
  }

  getCommends(){
    this.commendService.getCommends().pipe(first()).subscribe((res)=>{
      this.commends=res;
    })
  }
}
