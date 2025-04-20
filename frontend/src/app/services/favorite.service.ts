import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Favorites } from '../models/favorites';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {

  constructor(private http:HttpClient) { }

  private url="https://web2wed.onrender.com/api/fav" //server link for favorite profiles

  //Fetching favorite profiles based on ID
  getFavorites(id:any):Observable<Favorites[]>{
    return this.http.get<Favorites[]>(`${this.url}/${id}`)
  }

  //Deleting favorite profile based on ID
  delFavorites(id:any):Observable<any>{
    return this.http.delete<any>(`${this.url}/${id}`)
  }

  //Adding favorite profile 
  addFavorites(data:any):Observable<Favorites>{
    return this.http.post<Favorites>(this.url,data)
  }
}