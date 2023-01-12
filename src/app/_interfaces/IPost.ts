import {IUser} from "./IUser";
import {ICommend} from "./ICommend";

export interface IPost{
  id:number
  title:string,
  body: string,
  author: IUser
  createdDate?: Date,
  updatedDate?: Date,
  commends?:ICommend[]
}
  // Zorunlu olmayan variables icin ?
