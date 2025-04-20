import { AfterViewInit, Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MatchService } from 'src/app/services/match.service';
declare var bootstrap:any;
@Component({
  selector: 'app-waiting-profile',
  templateUrl: './waiting-profile.component.html',
  styleUrls: ['./waiting-profile.component.css']
})
export class WaitingProfileComponent implements AfterViewInit{
  profile:any;
  userId:any;
  matchId:any;
  MatchForm:FormGroup;
  modal: any;
  
  
    ngAfterViewInit(): void {
      const modalElement = document.getElementById('respondModal');
      if (modalElement) {
        this.modal = new bootstrap.Modal(modalElement);
      }
    }
  constructor(private ts:MatchService,private route:ActivatedRoute,private fb:FormBuilder){
    this.MatchForm=this.fb.group({
      status:['']
      })
  }
  
  ngOnInit(): void {
    //immediate execution
    this.userId=this.route.snapshot.paramMap.get("id")
    this.route.queryParams.subscribe(
      params => {
        this.matchId=params['matchId']
        console.log("match id",this.matchId)
        }
        
    )
    this.loadProfile()
    this.getMatch()
  }
  
  getMatch():void{
    //fetches the match status
    this.ts.getMatch(this.matchId).subscribe(
      res=>this.MatchForm.patchValue(res),
      err=>console.log(err)
    )
  }
  
  loadProfile():void{
    this.ts.waitingProfile(this.userId).subscribe(
      (data)=>{
        this.profile=data;
        console.log(this.profile)
        },
        (error)=>{
          console.log(error)
          }
    )
  }
  
  onSubmit(){
    //update match status
    console.log(this.MatchForm.value)
    this.ts.updateMatches(this.matchId,this.MatchForm.value).subscribe(
      res=>{
        this.openModal()
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
  
  
  
