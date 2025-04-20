import { Component } from '@angular/core';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css']
})
export class ContactDetailsComponent {
  contact:any;
  constructor(private ts:ContactService){}
  
  ngOnInit(): void {
    this.ts.getContacts().subscribe(
      data=>this.contact=data,
      err=>console.log(err)
    )
  }
  
  deleteContact(id:any){
    //fetches contact us data
    this.ts.deleteContacts(id).subscribe(
      res=>{console.log(res)
        this.ngOnInit()},
    
      err=>console.log(err)
    )
  }
  }
