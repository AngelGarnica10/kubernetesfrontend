import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(){}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const tokenSeguridad = localStorage.getItem('token');
    if( !tokenSeguridad ) {
      return next.handle(req);
    }

    const request = req.clone({
      headers: req.headers.set('Authorization', 'Bearer ' + tokenSeguridad)
    });

    return next.handle(request);
  }
}
