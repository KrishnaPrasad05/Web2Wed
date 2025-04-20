import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-search',
  templateUrl: './profile-search.component.html',
  styleUrls: ['./profile-search.component.css']
})
export class ProfileSearchComponent implements OnInit{
  searchText: string = '';
  profiles: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.onSearch(); // Load all users on init
  }

  onSearch() {
    //perform search operation
    const query = this.searchText.trim();

    const params = new HttpParams().set('q', query);

    this.http.get<any[]>('http://localhost:3000/api/profile/search', { params })
      .subscribe(data => {
        this.profiles = data;
      });
  }
}
