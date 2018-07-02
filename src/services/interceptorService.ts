/* Angular */
import { Injectable, NgModule } from '@angular/core';
import {HttpEvent,HttpInterceptor,HttpHandler,HttpRequest} from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

/* rxjs */
import { Observable } from 'rxjs/Observable';


@Injectable()
export class HttpsRequestInterceptor implements HttpInterceptor {
 intercept(
  request: HttpRequest<any>,
  next: HttpHandler,
 ): Observable<HttpEvent<any>> {
  request.headers.set('Content-Type', 'application/json');
  request.headers.set('AuthenticationToken', "11");
  request.headers.set('UniqueId', "11");
  const dupReq = request.clone({
   headers: request.headers
 });
 return next.handle(dupReq);
 }
}

@NgModule({
    providers: [
    {
    provide: HTTP_INTERCEPTORS,
    useClass: HttpsRequestInterceptor,
    multi: true,
    },
    ],
})

export class Interceptor {}