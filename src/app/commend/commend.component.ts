import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ICommend} from "../_interfaces/ICommend";



@Component({
  selector: 'app-commend',
  templateUrl: './commend.component.html',
  styleUrls: ['./commend.component.css']
})
export class CommendComponent {
 @Input() commends!: ICommend;
  @Output() openCommendModule=new EventEmitter();
  @Output() getCommends= new EventEmitter();
body!:ICommend;
index!:ICommend;

}
