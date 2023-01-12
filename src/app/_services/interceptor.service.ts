import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {first, Observable} from "rxjs";
import {UserService} from "./user.service";

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor(private userService: UserService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let user:any;
    this.userService.$user.pipe(first()).subscribe(res=>{
      user=res;
    })
    if (user) {
      request = request.clone({
        setHeaders: { Authorization: `${user.id}` }
      });
    }

    return next.handle(request);
  }
}
