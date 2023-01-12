import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { BlogPostComponent } from './blog-post/blog-post.component';
import { UserListComponent } from './user-list/user-list.component';
import { PostComponent } from './post/post.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { CommendComponent } from './commend/commend.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { MaterialModule} from "./_material/material.module";
import { ToolbarComponent } from './toolbar/toolbar.component';
import { PostInputComponent } from './post-input/post-input.component';
import { ErrorComponent } from './error/error.component';
import { CommendInputComponent } from './commend-input/commend-input.component';
import {JwtInterceptor} from "./_services/interceptor.service";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import { PostDetailComponent } from './post-detail/post-detail.component';


const routes: Routes = [
  {path:'', redirectTo:'blog-post',
    pathMatch:'full'},
  {path:'login',component: LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'post',component: PostComponent},
  {path:'post-detail/:id',component: PostDetailComponent},
  {path:'blog-post',component: BlogPostComponent},
  {path:'commend',component: CommendComponent},
  {path:'user-list',component: UserListComponent},
  {path:'user-profile/:username',component: UserProfileComponent},
  {path:'toolbar', component:ToolbarComponent},
  {path:'post-input', component:PostInputComponent},
  {path:'**',component:ErrorComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    BlogPostComponent,
    UserListComponent,
    PostComponent,
    UserProfileComponent,
    CommendComponent,
    ToolbarComponent,
    PostInputComponent,
    ErrorComponent,
    CommendInputComponent,
    PostDetailComponent
  ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        RouterModule.forRoot(routes),
        MaterialModule,
        MatSlideToggleModule,
        ReactiveFormsModule,
        HttpClientModule,
        MatButtonToggleModule

    ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
