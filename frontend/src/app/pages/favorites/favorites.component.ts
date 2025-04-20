import { Component } from '@angular/core';
import { Favorites } from 'src/app/models/favorites';
import { FavoriteService } from 'src/app/services/favorite.service';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent {
  favorites: Favorites[] = [];
  userId:any;
  profile:any;
constructor(private ts:FavoriteService,private fs:ProfileService){}
ngOnInit(): void {
  //immediate execution
  this.userId=localStorage.getItem('userId')
this.getFav()

}
getFav():void{
  //fetches favorite
  this.ts.getFavorites(this.userId).subscribe(
    res=>this.favorites=res,
    err=>console.log(err)
  )
}

delFav(id:any):void{
  //deletes favorite
  this.ts.delFavorites(id).subscribe(
    res=>this.getFav(),
    err=>console.log(err)
  )
}
}
