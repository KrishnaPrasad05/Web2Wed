import { AfterViewInit, Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactService } from 'src/app/services/contact.service';
declare var bootstrap:any;
@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements AfterViewInit{
  contactForm:FormGroup;
  modal: any;
  modalSuccess: any;
  
    ngAfterViewInit(): void {
      const modalElement = document.getElementById('contactModal');
      if (modalElement) {
        this.modal = new bootstrap.Modal(modalElement);
      }
      const modalSuccessElement = document.getElementById('contactSuccessModal');
      if (modalSuccessElement) {
        this.modalSuccess = new bootstrap.Modal(modalSuccessElement);
      }
    }
  constructor(private fb:FormBuilder,private ts:ContactService){
    this.contactForm=this.fb.group({
      name:['',[Validators.required]],
      email:['',[Validators.required]],
      details:['',[Validators.required]]
    })
  }
  onSubmit(){
    //adding contact us data
    if(this.contactForm.valid){
      this.ts.addContacts(this.contactForm.value).subscribe(
        res=>{console.log(res)
          this.openContactSuccessModal()
          this.contactForm.reset({
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
      this.contactForm.markAllAsTouched()
      
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
  openContactSuccessModal() {
    if (this.modalSuccess) {
      this.modalSuccess.show();
    }
  }
  
  closeContactSuccessModal() {
    if (this.modalSuccess) {
      this.modalSuccess.hide();
    }
  }
  }
  
