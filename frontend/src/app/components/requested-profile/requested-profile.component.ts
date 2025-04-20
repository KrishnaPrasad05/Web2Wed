import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-requested-profile',
  templateUrl: './requested-profile.component.html',
  styleUrls: ['./requested-profile.component.css']
})
export class RequestedProfileComponent {
  profile:any;
  profileId:any;
  
  constructor(private ts:ProfileService,private route:ActivatedRoute) { }
  
  ngOnInit(){
    this.profileId=this.route.snapshot.paramMap.get("id") //fetch ID in URL
    this.getProfile() //function to be executed immediately
  }
  getProfile(){
    this.ts.getProfile(this.profileId).subscribe(
      data=>{this.profile=data //storing fetched data
        console.log(this.profile)
      },
      error=>console.log(error)
    )
  }
  }
