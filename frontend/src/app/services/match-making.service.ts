import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MatchMakingService {


  private apiUrl = 'https://json.freeastrologyapi.com/match-making/ashtakoot-score';
  private apiKey = 'goNilKpuBW2ZAXhv1wQLY5haB1Jcgvpi6jB1Vh0r'; // Replace with actual key

  constructor(private http: HttpClient) {}

  getAshtakootScore(data:any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'x-api-key': this.apiKey
    });

   /*  const body = {
      female: {
        year: 1984,
        month: 7,
        date: 17,
        hours: 11,
        minutes: 45,
        seconds: 0,
        latitude: 16.16667,
        longitude: 81.1333,
        timezone: 5.5
      },
      male: {
        year: 1984,
        month: 4,
        date: 3,
        hours: 9,
        minutes: 15,
        seconds: 31,
        latitude: 16.51667,
        longitude: 80.61667,
        timezone: 5.5
      },
      config: {
        observation_point: 'topocentric',
        language: 'en',
        ayanamsha: 'lahiri'
      }
    }; */

    return this.http.post(this.apiUrl, data, { headers });
  }

 
}
