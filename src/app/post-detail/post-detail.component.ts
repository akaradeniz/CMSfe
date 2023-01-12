import { Component } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {PostService} from "../_services/post.service";
import {count, first} from "rxjs";
import {IPost} from "../_interfaces/IPost";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CommendService} from "../_services/commend.service";
import {ICommend} from "../_interfaces/ICommend";

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent {

  post!:IPost;
  id!:number;
  title!:string;

  commendForm!: FormGroup;
constructor(private route:ActivatedRoute,
            private router:Router,
            private postService: PostService,
            private formBuild:FormBuilder,
            private commendService:CommendService) {
  this.id = Number(this.route.snapshot.paramMap.get('id'));
  //convert the string to number
  this.commendForm= this.formBuild.group({
    body:['',Validators.minLength(3)],
  })
 this.getPostDetail();
}

getPostDetail(){
  this.postService.getPostDetail(this.id).pipe(first()).subscribe((res)=>{
  console.log(res);
  this.post=res;}
  );
}

  onCreateNewCommend() {
  if(this.commendForm.invalid) return;
  console.log(this.commendForm.value);
  if(!this.commendForm.value.id){
    this.commendService.createCommend(this.commendForm.value,this.post.id).pipe(first()).subscribe(
res=> {
  console.log(res);},
      )
  }else{
    this.commendService.updateCommend(this.commendForm.value,this.post.id).pipe(first()).subscribe(res=>{
      console.log(res);
    })
  }
//this.router.navigate(['/post',this.post.author])
}

}
