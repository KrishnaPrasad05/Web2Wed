import { Component, OnInit } from '@angular/core';
import { Match } from 'src/app/models/match';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit{
  constructor(private ts:MatchService){}
  userId:any;
  requestMatch: Match[]=[];
  waitingMatch: Match[]=[];
  ngOnInit(): void {
    this.userId=localStorage.getItem('userId')
    this.requestedMatches()
    this.waitingMatches()
  }
  requestedMatches(){
    //fetches requested matches
    this.ts.requestedMatches(this.userId).subscribe(
      res=>{this.requestMatch=res
        console.log("RequestedMatch",this.requestMatch)
      },
      err=>console.log(err)
    )
  }
  waitingMatches(){
    //fetches waiting matches
    this.ts.waitingMatches(this.userId).subscribe(
      res=>{this.waitingMatch=res
        console.log("Waiting Match",this.waitingMatch)
      },
      err=>console.log(err)
    )
  }
  deleteMatches(id:any){
    //deletes requested matches
    this.ts.deleteMatches(id).subscribe(
      res=>{console.log(res)
        this.requestedMatches()
        this.waitingMatches()
        },
        err=>console.log(err)
        )
  }
}
