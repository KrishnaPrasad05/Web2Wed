import { Component, OnInit } from '@angular/core';
import { ProfileSearchComponent } from '../profile-search/profile-search.component';
import { ProfileService } from 'src/app/services/profile.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-current-profile',
  templateUrl: './current-profile.component.html',
  styleUrls: ['./current-profile.component.css']
})
export class CurrentProfileComponent implements OnInit{
  profile:any;
  email:any;
  phone:any;
  showModal = false;
  constructor(private ts:ProfileService,private router:Router){}
  
    
    openModal() {
      this.showModal = true;
    }
  
    closeModal() {
      this.showModal = false;
    }
  
  
  ngOnInit(): void {
    //immediate execution
    this.email=localStorage.getItem('email')
    this.phone=localStorage.getItem('phone')
    this.loadProfile()
  }
  
  updateProfile(id:any){
  this.router.navigate(['/update-profile',id]) //navigates to update page
  }
  
  deleteProfile(id:any){
  //delete profile based on ID
  this.ts.deleteProfile(id).subscribe(
    res=>{
      console.log('Deleted SUccessfully')
      this.router.navigate(['/home'])
    },
    err=>console.log(err)
  )
  }
  
  loadProfile():void{
    //fetches current profile based on ID
    this.ts.getCurrentProfile(this.email,this.phone).subscribe(
      (data)=>{
        this.profile=data;
        console.log(this.profile)
        },
        (error)=>{
          console.log(error)
          }
    )
  }
  }
  
  
