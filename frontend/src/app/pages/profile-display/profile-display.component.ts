import { Component } from '@angular/core';
import { Profile } from 'src/app/models/profile';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-profile-display',
  templateUrl: './profile-display.component.html',
  styleUrls: ['./profile-display.component.css']
})
export class ProfileDisplayComponent {
  profile:Profile[]=[]
  constructor(private ts:ProfileService){}
  
  ngOnInit():void{
    this.getProfiles()
  }
  
  getProfiles(){
    //fetches approved profiles
    this.ts.getApprovedProfiles().subscribe(
      data=>{
        this.profile=data
      },
      error=>console.log("Error",error)
    )
  }
}
