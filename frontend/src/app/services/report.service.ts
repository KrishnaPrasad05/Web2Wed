import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  constructor(private http:HttpClient) { }

  private url="http://localhost:3000/api/report" //server link for report us details

  //Adding report us details
  addReports(data:any):Observable<Report[]>{
    return this.http.post<Report[]>(this.url,data)
  }

  //Fetching all report us details
  getReports():Observable<Report[]>{
    return this.http.get<Report[]>(this.url)
  }

  //Fetching report us details by id
  getReport(id:any):Observable<Report[]>{
    return this.http.get<any>(`${this.url}/${id}`)
  }

  //Updating report us details based on ID
  updateReport(id:any,data:any):Observable<any>{
    return this.http.put(`${this.url}/${id}`,data)
  }

  //Deleting report us details based on ID
  deleteReport(id:any):Observable<any>{
    return this.http.delete(`${this.url}/${id}`)
  }
}
