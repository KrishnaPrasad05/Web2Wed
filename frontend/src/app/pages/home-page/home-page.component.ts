import { AfterViewInit, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements AfterViewInit{
  constructor(private route:ActivatedRoute){}
  ngAfterViewInit(): void {
    this.route.fragment.subscribe((fragment)=>{
      if(fragment){
        const element = document.querySelector(fragment);
        if(element){
          setTimeout(()=>{
            element.scrollIntoView({behavior:'smooth'}) //ensures smooth transition of pages
          },100)
        }
      }
    })
  }
  }
  
