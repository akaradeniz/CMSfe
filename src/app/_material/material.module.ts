import { NgModule } from '@angular/core';
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatBadgeModule} from '@angular/material/badge';
import {MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldControl, MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from "@angular/material/icon";
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import {IPost} from "../_interfaces/IPost";
import {ErrorStateMatcher, ShowOnDirtyErrorStateMatcher} from "@angular/material/core";


const MaterialComponents=[
  MatButtonModule,
  MatBadgeModule,
  MatIconModule,
  MatToolbarModule,
  MatMenuModule,
  MatCardModule,
  MatDividerModule,
  MatDialogModule,
  MatFormFieldModule,
  MatInputModule,

];

@NgModule({
  imports: [
   MaterialComponents
  ],
  exports:[
    MaterialComponents
  ],
  providers: [{
    provide: MatDialogRef,
    useValue: {}
  },
    {provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue:
        {appearance: 'outline'}},
    {provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher}
  ]
})
export class MaterialModule { }
