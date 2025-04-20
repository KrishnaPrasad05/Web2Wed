import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }
  
    private url="https://web2wed.onrender.com/api/user" //Server link for user details
    
    //Adding users
    addUsers(data:any):Observable<User[]>{
      return this.http.post<User[]>(this.url,data)
    }

    //Fetching all users
    getUsers():Observable<User[]>{
      return this.http.get<User[]>(this.url)
    }

    //Fetching user based on ID
    getUser(id:any):Observable<User[]>{
      return this.http.get<any>(`${this.url}/${id}`)
    }

    //Updating user details based on ID
    updateUser(id:any,data:any):Observable<any>{
      return this.http.put(`${this.url}/${id}`,data)
    }

    //Updating user details based on ID
    deleteUser(id:any):Observable<any>{
      return this.http.delete(`${this.url}/${id}`)
    }
}
