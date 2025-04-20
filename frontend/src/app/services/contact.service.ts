import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contact } from '../models/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http:HttpClient) { }

  private url="https://web2wed.onrender.com/api/contact" //server link for contact us details

  //Adding contacts
  addContacts(data:any):Observable<Contact[]>{
    return this.http.post<Contact[]>(this.url,data)
  }

  //Fetching all contact us details
  getContacts():Observable<Contact[]>{
    return this.http.get<Contact[]>(this.url)
  }

  //Fetching specific contact detail based on ID
  getContact(id:any):Observable<Contact>{
    return this.http.get<any>(`${this.url}/${id}`)
  }

  //Deleting contact detail based on ID
  deleteContacts(id:any):Observable<any>{
    return this.http.delete(`${this.url}/${id}`)
  }

  //Updating contact details based on ID
  updateContacts(id:any,data:any):Observable<any>{
    return this.http.put(`${this.url}/${id}`,data)
  }
}
