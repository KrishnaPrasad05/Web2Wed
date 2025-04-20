import { Injectable } from "@angular/core";
import {ActivatedRouteSnapshot, CanActivate,Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate{
  constructor(private router: Router) { }

  canActivate():boolean {
    const userId = localStorage.getItem('userId') //uses userId to validate and pass through pages
    if(userId){
      return true;
    }
    else{
      this.router.navigate(['/login']);
      return false;
    }
  }
}