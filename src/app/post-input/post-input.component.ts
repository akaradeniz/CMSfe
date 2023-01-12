import {Component, EventEmitter, Inject, Input, Output} from '@angular/core';
import {IPost} from "../_interfaces/IPost";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {HttpService} from "../_services/http.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Subscription} from "rxjs";
import {PostService} from "../_services/post.service";

@Component({
  selector: 'app-post-input',
  templateUrl: './post-input.component.html',
  styleUrls: ['./post-input.component.css']
})
export class PostInputComponent {
@Input() posts!:IPost;
@Output() getPosts=new EventEmitter();

cardForm!: FormGroup;
subscribe!:Subscription;

  //MatDialogRef<PostInputComponent> dialog ref
  // the window which we open to create will be close with
constructor(
  private dialogRef: MatDialogRef<PostInputComponent>,
  private formBuilder:FormBuilder,
            private postService:PostService,
  @Inject(MAT_DIALOG_DATA) public data: IPost
            ) {
}

ngOnInit(){
  if(this.data){
    this.cardForm= this.formBuilder.group({
      id:this.data.id,
      title:[this.data.title,Validators.required],
      body:this.data.body
    })
  }else{
    this.cardForm= this.formBuilder.group({
      title:['',Validators.required],
      body:''
    })
  }

}

  addClick() {
  if(this.cardForm.invalid) return;

    console.log(this.cardForm.value);

    if(!this.cardForm.value.id){
      this.postService.addPost(this.cardForm.value).subscribe((res)=>{

        console.log(res);

      })
    }else{
      this.postService.updatePost(this.cardForm.value).pipe().subscribe(
        res=>{
          console.log(res);
        //  window.location.reload()
        }
      )
    }

    this.dialogRef.close();
  }
}
