import { Component, Input } from '@angular/core';
import { Favorites } from 'src/app/models/favorites';
import { FavoriteService } from 'src/app/services/favorite.service';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.css']
})
export class ProfileCardComponent {
  @Input() id:any;
  @Input() name:any;
  @Input() dob:any;
  @Input() job:any;
  @Input() salary:any;
  @Input() approval:any;
  
  favAvail:boolean=false;
  userId:any;
  profile:any;
  favorites: Favorites[] = [];
  constructor(private ts:ProfileService,private fs:FavoriteService) { }
  
  ngOnInit(){
    //immediate execution
    this.userId=localStorage.getItem('userId') //fetch ID in URL
    this.getProfile()
    this.getFav()
  
  }
  getProfile(){
    this.ts.getProfile(this.id).subscribe(
      data=>{this.profile=data
        console.log(this.profile)
      },
      error=>console.log(error)
    )
  }
  getFav():void{
    this.fs.getFavorites(this.userId).subscribe(
      res=>{
        this.favorites=res //data storing
        console.log('Favorites',this.favorites)
        this.checkFav()
      },
      err=>console.log(err)
    )
  }
  addFav():void{
    //adding favorite data
    const fav = {
      currentUser:this.userId,
      favorite:this.profile._id,
      favName:this.profile.name,
      favJob:this.profile.job,
      favSalary:this.profile.salary,
      favPic:this.profile.pic01
    }
    console.log(fav)
    this.fs.addFavorites(fav).subscribe(
      data=>{
       /*  this.toggleLike() */
        console.log(data)},
      error=>console.log(error)
    )
  }
  
  delFav(id:any):void{
    //deleting favorite based on ID
    this.fs.delFavorites(id).subscribe(
      res=>this.getFav(),
      err=>console.log(err)
    )
  }
  
  checkFav(){
    this.favAvail=this.favorites.some(item=>item.currentUser===this.userId && item.favorite===this.id)
  }
  
  toggleFav(){
    //toggles based on favorites
    if(this.favAvail){
      const favToRemove = this.favorites.find(item=>item.currentUser===this.userId && item.favorite===this.id)
      console.log(favToRemove)
      if(favToRemove){
        this.delFav(favToRemove._id)
        window.location.reload()
        this.getFav()
      }
      }else{
        this.addFav()
        window.location.reload()
        this.getFav()
        }
  }
  
}
