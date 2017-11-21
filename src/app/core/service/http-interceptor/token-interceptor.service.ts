import {Injectable, Injector} from '@angular/core';
import {
  HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse,
  HttpErrorResponse
} from "@angular/common/http";
import {Observable} from "rxjs";
import {AuthService} from "../auth/auth.service";


@Injectable()
export class TokenInterceptorService implements HttpInterceptor{
  //private authService;
  constructor(private injector: Injector) {
    // setTimeout(() => {
    //   this.authService = injector.get(AuthService);
    //   console.log('=================================',this.authService);
    // });
  }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const authService = this.injector.get(AuthService);
    // always clone never manipulate directly the request!!
    request = request.clone({
      setHeaders: {
        Authorization: `Bearer ${authService.getToken()}` //  c2393516-e82b-4513-88b6-6931d689c075
      }
    });
     return next.handle(request).do((event: HttpEvent<any>) => {
      if (event instanceof HttpResponse) {
        // do stuff with response if you want
      }
    }, (err: any) => {
      if (err instanceof HttpErrorResponse) {
        if (err.status === 401) {
          console.log('redirect to login !!!!!!!!!!!');
          // todo : route.navigate('/login');
          authService.login().subscribe(r => console.log('token ',r));

        }
      }
    });
   // return next.handle(request);
  }
}
