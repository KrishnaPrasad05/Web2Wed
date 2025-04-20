import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Profile } from '../models/profile';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http:HttpClient) { }

  private url="https://web2wed.onrender.com/api/profile" //server link for profile
  private url1="https://web2wed.onrender.com/api/current-profile" //server link for current profile
  private url2="https://web2wed.onrender.com/api/profile-approved" //server link for current profile
  private url3="https://web2wed.onrender.com/api/profile-rejected" //server link for current profile
  private url4="https://web2wed.onrender.com/api/profile-pending" //server link for current profile

  //Adding profile
  addProfiles(data:any):Observable<Profile[]>{
    return this.http.post<Profile[]>(this.url,data)
  }

  //Fetching all profiles
  getProfiles():Observable<Profile[]>{
    return this.http.get<Profile[]>(this.url)
  }

  //Fetching all approved profiles
  getApprovedProfiles():Observable<Profile[]>{
    return this.http.get<Profile[]>(this.url2)
  }
  //Fetching all rejected profiles
  getRejectedProfiles():Observable<Profile[]>{
    return this.http.get<Profile[]>(this.url3)
  }
  //Fetching all pending profiles
  getPendingProfiles():Observable<Profile[]>{
    return this.http.get<Profile[]>(this.url4)
  }

  //Fetching profile based on ID
  getProfile(id:any):Observable<Profile>{
    return this.http.get<Profile>(`${this.url}/${id}`)
  }

  //Deleting profile based on ID
  deleteProfile(id:any):Observable<any>{
    return this.http.delete<any>(`${this.url}/${id}`)
  }

  //Updating profile based on ID
  updateProfile(id:any,data:any):Observable<any>{
    return this.http.put<any>(`${this.url}/${id}`,data)
  }

  //Fetching details of current profile
  getCurrentProfile(email:any,phone:any):Observable<any>{
    const params=new HttpParams().set('email',email).set('phone',phone);
    return this.http.get<any>(this.url1,{params})
  }
}
