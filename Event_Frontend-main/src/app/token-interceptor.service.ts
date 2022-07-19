import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { ThisReceiver } from '@angular/compiler';
import { LoginService } from './service/login.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private loginService:LoginService) { }

  intercept(req :HttpRequest<any>,next:HttpHandler) {
    let tokenizedReq=req.clone({
      setHeaders:{
        Authorization :'Bearer ' +this.loginService.getToken()
      }
    })
    return next.handle(tokenizedReq).pipe(
      catchError((error)=>{
        // alert(error.message)
        return throwError(error)
      })
    )
  }
}
