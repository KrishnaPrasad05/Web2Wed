import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Match } from '../models/match';
import { Profile } from '../models/profile';

@Injectable({
  providedIn: 'root'
})
export class MatchService {

  constructor(private http:HttpClient) { }

  private url="https://web2wed.onrender.com/api/match" //server link for match profile
  private url1="https://web2wed.onrender.com/api/requested-match" //server link for requested match profile
  private url2="https://web2wed.onrender.com/api/waiting-match" //server link for waiting match 
  private url3="https://web2wed.onrender.com/api/waiting-profile" //server link for waiting profile

  //Adding match profile
  addMatch(data:any):Observable<Match>{
    return this.http.post<Match>(this.url,data)
  }

  //Fetching all matches
  getMatches():Observable<Match[]>{
    return this.http.get<Match[]>(this.url)
  }

  //Fetching match based on ID
  getMatch(id:any):Observable<Match>{
    return this.http.get<Match>(`${this.url}/${id}`)
  }

  //Deleting match based on ID
  deleteMatches(id:any):Observable<any>{
    return this.http.delete<any>(`${this.url}/${id}`)
  }

  //Updating match based on ID
  updateMatches(id:any,data:any):Observable<any>{
    return this.http.put<any>(`${this.url}/${id}`,data)
  }

  //Fetching all requested match based on ID
  requestedMatches(id:any):Observable<Match[]>{
    return this.http.get<Match[]>(`${this.url1}/${id}`)
  }

  //Fetching all waiting match based on ID
  waitingMatches(id:any):Observable<Match[]>{
    return this.http.get<Match[]>(`${this.url2}/${id}`)
  }

  //Fetching all waiting profile based on ID
  waitingProfile(id:any):Observable<Profile[]>{
    return this.http.get<Profile[]>(`${this.url3}/${id}`)
  }
}
