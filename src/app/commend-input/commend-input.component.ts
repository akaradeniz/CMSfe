import {Component, Input} from '@angular/core';
import {ICommend} from "../_interfaces/ICommend";

@Component({
  selector: 'app-commend-input',
  templateUrl: './commend-input.component.html',
  styleUrls: ['./commend-input.component.css']
})
export class CommendInputComponent {
@Input()  commends!:ICommend;
  addClick() {

  }
}
