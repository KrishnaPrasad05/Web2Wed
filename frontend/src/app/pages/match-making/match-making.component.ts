import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatchMakingService } from 'src/app/services/match-making.service';

@Component({
  selector: 'app-match-making',
  templateUrl: './match-making.component.html',
  styleUrls: ['./match-making.component.css']
})

export class MatchMakingComponent {
  matchForm!: FormGroup;
  result: any;

  constructor(private fb: FormBuilder, private matchmakingService: MatchMakingService) {}

  ngOnInit() {
    this.matchForm = this.fb.group({
      male: this.fb.group({
        year: [1984, Validators.required],
        month: [4, Validators.required],
        date: [3, Validators.required],
        hours: [9, Validators.required],
        minutes: [15, Validators.required],
        seconds: [31, Validators.required],
        latitude: [null, Validators.required],
        longitude: [null, Validators.required],
        timezone: [null, Validators.required]
      }),
      female: this.fb.group({
        year: [1984, Validators.required],
        month: [7, Validators.required],
        date: [17, Validators.required],
        hours: [11, Validators.required],
        minutes: [45, Validators.required],
        seconds: [0, Validators.required],
        latitude: [null, Validators.required],
        longitude: [null, Validators.required],
        timezone: [null, Validators.required]
      }),
      config: this.fb.group({
        observation_point: ['topocentric', Validators.required],
        language: ['en', Validators.required],
        ayanamsha: ['lahiri', Validators.required]
      })
    });
  }

  getLocation() {
    //perfoem auto detect location operation
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const lat = position.coords.latitude;
          const lon = position.coords.longitude;
          const timezoneOffset = -(new Date().getTimezoneOffset() / 60);

          // Patch values for both male and female
          ['male', 'female'].forEach(role => {
            this.matchForm.get(`${role}.latitude`)?.setValue(lat);
            this.matchForm.get(`${role}.longitude`)?.setValue(lon);
            this.matchForm.get(`${role}.timezone`)?.setValue(timezoneOffset);
          });

          console.log('Auto Location:', lat, lon, 'TZ:', timezoneOffset);
        },
        (error) => {
          console.error('Geolocation error:', error);
          alert('Location access denied or unavailable.');
        }
      );
    } else {
      alert('Geolocation is not supported by your browser.');
    }
  }

  submitForm() {
    //post data to API for match making operation
    if (this.matchForm.valid) {
      const formData = this.matchForm.value;
      this.matchmakingService.getAshtakootScore(formData).subscribe(
        (res) => {
          this.result = res;
        },
        (err) => {
          console.error('API Error:', err);
        }
      );
    }
  }

  /* fetchMatchScore() {
    this.matchmakingService.getAshtakootScore().subscribe(
      (data) => {
        this.result = data;
        console.log('Ashtakoot Score:', data);
      },
      (error) => {
        console.error('Error fetching match score:', error);
      }
    );
  } */
}
