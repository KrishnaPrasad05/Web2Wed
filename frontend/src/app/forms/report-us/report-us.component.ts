import { AfterViewInit, Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReportService } from 'src/app/services/report.service';
declare var bootstrap:any;
@Component({
  selector: 'app-report-us',
  templateUrl: './report-us.component.html',
  styleUrls: ['./report-us.component.css']
})
export class ReportUsComponent implements AfterViewInit{
  reportForm:FormGroup;
  modal: any;
  modalSuccess: any;
  
    ngAfterViewInit(): void {
      const modalElement = document.getElementById('reportModal');
      if (modalElement) {
        this.modal = new bootstrap.Modal(modalElement);
      }
      const modalSuccessElement = document.getElementById('reportSuccessModal');
      if (modalSuccessElement) {
        this.modalSuccess = new bootstrap.Modal(modalSuccessElement);
      }
    }
  constructor(private fb:FormBuilder,private ts:ReportService) {
    this.reportForm=this.fb.group({
      name:['',[Validators.required]],
      email:['',[Validators.required,Validators.email]],
      details:['',[Validators.required,Validators.maxLength(150)]]
    })
   }
   onSubmit(){
    //adds report us data
    if(this.reportForm.valid){
      this.ts.addReports(this.reportForm.value).subscribe(
        res=>{this.openReportSuccessModal()
            this.reportForm.reset({
              name:'',
              email:'',
              details:''
            })
        },
        err=>console.log(err)
      )
    }
    else{
      this.openModal()
      this.reportForm.markAllAsTouched()
  
    }
   
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
  openReportSuccessModal() {
    if (this.modalSuccess) {
      this.modalSuccess.show();
    }
  }
  
  closeReporttSuccessModal() {
    if (this.modalSuccess) {
      this.modalSuccess.hide();
    }
  }
  }
