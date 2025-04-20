import { Component } from '@angular/core';

@Component({
  selector: 'app-user-footer',
  templateUrl: './user-footer.component.html',
  styleUrls: ['./user-footer.component.css']
})
export class UserFooterComponent {
  currentYear:number=new Date().getFullYear()

  scrollTo(sectionId: string):void{
    const element = document.getElementById(sectionId);
    if(element){
      element.scrollIntoView({behavior: 'smooth'}); //to ensure smooth page transtition on scrolling
    }
  }
}
