import { Component } from '@angular/core';
import { ReportService } from 'src/app/services/report.service';

@Component({
  selector: 'app-report-details',
  templateUrl: './report-details.component.html',
  styleUrls: ['./report-details.component.css']
})
export class ReportDetailsComponent {
  report:any;
  constructor(private ts:ReportService){}
  
  ngOnInit(): void {
    //fetch report us data
    this.ts.getReports().subscribe(
      data=>this.report=data,
      err=>console.log(err)
    )
  }
  
  deleteReport(id:any){
    //delete report us data bsed on id
    this.ts.deleteReport(id).subscribe(
      res=>{console.log(res)
        this.ngOnInit()},
    
      err=>console.log(err)
    )
  }
  }
  
