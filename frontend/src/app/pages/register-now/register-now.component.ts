import { AfterViewInit, Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
declare var bootstrap:any;
@Component({
  selector: 'app-register-now',
  templateUrl: './register-now.component.html',
  styleUrls: ['./register-now.component.css']
})
export class RegisterNowComponent implements AfterViewInit{
  userForm  :FormGroup;
  modal: any;
  successModal: any;
  
    ngAfterViewInit(): void {
      const modalElement = document.getElementById('warningModal');
      if (modalElement) {
        this.modal = new bootstrap.Modal(modalElement);
      }
      const successModalElement = document.getElementById('successModal');
      if (successModalElement) {
        this.successModal = new bootstrap.Modal(successModalElement);
      }
    }
  constructor(private fb:FormBuilder,private ts:UserService,private router:Router){
    this.userForm=this.fb.group({
      name:['',[Validators.required]],
      email:['',[Validators.required]],
      phone:['',[Validators.required]],
      password:['',[Validators.required]]
    })
  }
  onSubmit(){
    //adds user data
    if(this.userForm.valid){
      this.ts.addUsers(this.userForm.value).subscribe(
        res=>{
          this.openSuccessModal()
          this.userForm.reset({
            name:'',
            email:'',
            phone:'',
            password:''
          })
        },
        err=>console.log(err)
      )
    }
    else{
      this.userForm.markAllAsTouched()
      this.openModal()
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
  closeSuccessModal1() {
    if (this.successModal) {
      this.successModal.hide();
      this.router.navigate([''])
    }
  }
  }
  