import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree,Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
  constructor(private loginService:LoginService,private router:Router){}
 
  canActivate():boolean{
    if(this.loginService.loggedIn()){
      return true;
    }
    else{
      this.router.navigate(['first'])
      return false;
    }
  }
  
}
