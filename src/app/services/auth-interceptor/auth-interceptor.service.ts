import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpErrorResponse
} from '@angular/common/http';
import { TokenService } from '../token/token.service';
import { Observable, of } from 'rxjs';
import { Router } from '@angular/router';
// import { catchError } from 'rxjs/operators/catchError';
import { UserAuthService } from '../auth/user-auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService {

  constructor(
    private tokenServ: TokenService,
    private userServ: UserAuthService,
    private router: Router
  ) { }

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler): Observable<HttpEvent<any>> {

    const token = this.tokenServ.token;
    let transformedReq = req;

    if (token) {
      transformedReq = req.clone({
        setHeaders: {
          'Authorization': `Bearer ${token}`
        }
      });
    }

    // return next.handle(transformedReq);
    return next.handle(transformedReq);
     
  }
}