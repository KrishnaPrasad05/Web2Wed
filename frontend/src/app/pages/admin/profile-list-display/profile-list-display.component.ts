import { AfterViewInit, Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ProfileService } from 'src/app/services/profile.service';
declare var bootstrap:any;
@Component({
  selector: 'app-profile-list-display',
  templateUrl: './profile-list-display.component.html',
  styleUrls: ['./profile-list-display.component.css']
})
export class ProfileListDisplayComponent implements AfterViewInit{
  profile:any;
  userId:any;
  successModal: any;
  ApproveForm:FormGroup;
  ngAfterViewInit(): void {
    const successModalElement = document.getElementById('successModal');
    if (successModalElement) {
      this.successModal = new bootstrap.Modal(successModalElement);
    }
  }
  
  constructor(private ts:ProfileService,private route:ActivatedRoute,private fb:FormBuilder){
    this.ApproveForm=this.fb.group({
      approval:['']
      })
  }
  
  
  ngOnInit(): void {
    this.userId=this.route.snapshot.paramMap.get("id")
    this.getProfile()
  }
  getProfile():void{
    //fetches profile based on ID
    this.ts.getProfile(this.userId).subscribe(
      res=>{
        this.profile=res;
        this.ApproveForm.patchValue(res)},
      err=>console.log(err)
    )
  }
  onSubmit(){
    this.ts.updateProfile(this.userId,this.ApproveForm.value).subscribe(
      res=>{console.log("Successfull")
        this.openSuccessModal()
      },
      err=>console.log(err)
    )
  }
  
  openSuccessModal() {
    if (this.successModal) {
      this.successModal.show();
    }
  }
  
  closeSuccessModal() {
    if (this.successModal) {
      this.successModal.hide();
     
    }
  }
  }
