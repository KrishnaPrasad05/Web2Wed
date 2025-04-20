import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Profile } from 'src/app/models/profile';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-profile-list',
  templateUrl: './profile-list.component.html',
  styleUrls: ['./profile-list.component.css']
})
export class ProfileListComponent implements OnInit{
  profile:Profile[]=[];
  profileRej:Profile[]=[];
  profilePen:Profile[]=[];
  selectedTab:string='approved';
  constructor(private ts:ProfileService,private router:Router) { }
  
  ngOnInit(): void {
    this.getApprovedProfile()
    this.getRejectedProfile()
    this.getPendingProfile()
  }
  
  getApprovedProfile():void{
    //fetches approval profile
    this.ts.getApprovedProfiles().subscribe(
      res=>{this.profile=res
        console.log(this.profile)
      },
      err=>console.log(err)
    )
  }
  getRejectedProfile():void{
    //fetches rejected profile
    this.ts.getRejectedProfiles().subscribe(
      res=>{this.profileRej=res
        
      },
      err=>console.log(err)
    )
  }
  getPendingProfile():void{
    //fetches pending profile
    this.ts.getPendingProfiles().subscribe(
      res=>{this.profilePen=res
        
      },
      err=>console.log(err)
    )
  }
  
  }
  