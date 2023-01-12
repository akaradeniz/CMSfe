import { Component } from '@angular/core';
import {IPost} from "../_interfaces/IPost";
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {HttpService} from "../_services/http.service";
import { first} from "rxjs";
import {PostInputComponent} from "../post-input/post-input.component";
import {PostComponent} from "../post/post.component";
import {PostService} from "../_services/post.service";

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.css']
})
export class BlogPostComponent {
// blogList!: IPost[];
posts!: IPost[];
constructor( public dialog: MatDialog,
             private postService:PostService,public dialogRef: MatDialogRef<PostInputComponent>) {
}

ngOnInit(){
 this.getPosts();
}

  openPostModule(post:any) {
    this.dialog.open(PostInputComponent,{width:'20rem',data: post }).afterClosed().subscribe(res=>{
      this.getPosts()
    });
  }

  getPosts(){
  this.postService.getPosts().pipe(first()).subscribe(
    (data)=>{
      this.posts=data;
    }
  )
  }
}
