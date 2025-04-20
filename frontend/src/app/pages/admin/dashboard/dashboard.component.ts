import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/models/contact';
import { Profile } from 'src/app/models/profile';
import { Report } from 'src/app/models/report';

import { User } from 'src/app/models/user';
import { ContactService } from 'src/app/services/contact.service';
import { ProfileService } from 'src/app/services/profile.service';
import { ReportService } from 'src/app/services/report.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
  profile: Profile[]=[];
  user: User[]=[];
  contact: Contact[]=[];
  report: any;
  constructor(private ts:ProfileService,private us:UserService,private cs:ContactService,private rs:ReportService){}
  ngOnInit(): void {
    this.getProfile()
    this.getUsers()
    this.getContacts()
    this.getReports()
  }
  
  getProfile(){
    //fetches profile data
    this.ts.getProfiles().subscribe(
      res=>{this.profile=res
        console.log(this.profile.length)
      },
      err=>console.log(err)
    )
  }
  
  getUsers(){
    //fetches user data
    this.us.getUsers().subscribe(
      res=>{this.user=res
        console.log(this.user.length)
      },
      err=>console.log(err)
    )
  }
  
  getContacts(){
    //fetches contact us data
    this.cs.getContacts().subscribe(
      res=>{this.contact=res
        console.log(this.contact.length)
      },
      err=>console.log(err)
    )
  }
  
  getReports(){
    //fetches report us data
    this.rs.getReports().subscribe(
      res=>{this.report=res
        console.log(this.report.length)
      },
      err=>console.log(err)
    )
  }
  }
