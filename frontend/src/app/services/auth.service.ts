import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private route:Router,private http:HttpClient) { }

  private url='http://localhost:3000/api/login' //server url for login authentication


  //Authenticating user
  authUser(data:any):Observable<any>{
    console.log(data)
    return this.http.post<any>(this.url,data)
  }

  //Storing user data locally
  storeUserData(token:any,userId:any,email:any,phone:any):void{
    localStorage.setItem('token',token)
    localStorage.setItem('userId',userId)
    localStorage.setItem('email',email)
    localStorage.setItem('phone',phone)
  }

  //Retreiving userId stored locally
  getUserId():any{
    return localStorage.getItem('userId')
  }

  //Logging out user and data stored locally
  logout():void{
    localStorage.removeItem('token')
    localStorage.removeItem('userId')
    localStorage.removeItem('email')
    localStorage.removeItem('phone')
  }

}
