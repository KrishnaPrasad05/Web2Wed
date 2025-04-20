import { AfterViewInit, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatchService } from 'src/app/services/match.service';
import { ProfileService } from 'src/app/services/profile.service';
declare var bootstrap:any;
@Component({
  selector: 'app-profile-detail',
  templateUrl: './profile-detail.component.html',
  styleUrls: ['./profile-detail.component.css']
})
export class ProfileDetailComponent implements AfterViewInit{
  profile:any;
  profileId:any;
  userId:any;
  modal: any;
  
  
    ngAfterViewInit(): void {
      const modalElement = document.getElementById('requestModal');
      if (modalElement) {
        this.modal = new bootstrap.Modal(modalElement);
      }
    }
  constructor(private ts:ProfileService,private route:ActivatedRoute,private ms:MatchService) { }
  
  ngOnInit(){
    //immediate execution
    this.profileId=this.route.snapshot.paramMap.get("id")
    this.userId=localStorage.getItem('userId')
    this.getProfile()
  }
  getProfile(){
    this.ts.getProfile(this.profileId).subscribe(
      data=>{this.profile=data //storing data
        console.log(this.profile)
      },
      error=>console.log(error)
    )
  }
  
  selectMatch(){
    const newData={
      currentUser:this.userId,
      matchUser:this.profile._id,
      status:'requested'
    }//adding match details
  this.ms.addMatch(newData).subscribe(
    res=>{
      this.openModal()
      console.log("Succesfull",res)
    },
    err=>console.log(err)
  )
  }
  
  openModal() {
    if (this.modal) {
      this.modal.show();
    }
  }
  
  closeModal() {
    if (this.modal) {
      this.modal.hide();
    }
  }
  }
