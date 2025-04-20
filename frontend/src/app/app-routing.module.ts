import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegisterNowComponent } from './pages/register-now/register-now.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ProfileFormComponent } from './forms/profile-form/profile-form.component';
import { CurrentProfileComponent } from './pages/current-profile/current-profile.component';
import { UpdateCurrentProfileComponent } from './forms/update-current-profile/update-current-profile.component';
import { ProfileDetailComponent } from './components/profile-detail/profile-detail.component';
import { ProfileDisplayComponent } from './pages/profile-display/profile-display.component';
import { NotificationsComponent } from './pages/notifications/notifications.component';
import { RequestedProfileComponent } from './components/requested-profile/requested-profile.component';
import { WaitingProfileComponent } from './pages/waiting-profile/waiting-profile.component';
import { ProfileSearchComponent } from './pages/profile-search/profile-search.component';
import { FavoritesComponent } from './pages/favorites/favorites.component';
import { MatchMakingComponent } from './pages/match-making/match-making.component';
import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy.component';
import { TermsConditionsComponent } from './pages/terms-conditions/terms-conditions.component';
import { AdminHomeComponent } from './pages/admin/admin-home/admin-home.component';
import { ContactDetailsComponent } from './pages/admin/contact-details/contact-details.component';
import { ReportDetailsComponent } from './pages/admin/report-details/report-details.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { ProfileListComponent } from './pages/admin/profile-list/profile-list.component';
import { ProfileListDisplayComponent } from './pages/admin/profile-list-display/profile-list-display.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {path:'',component:LoginPageComponent},
  {path:'register-now',component:RegisterNowComponent},
  {path:'home',component:HomePageComponent,canActivate:[AuthGuard]},
  {path:'form',component:ProfileFormComponent},
  {path:'profile',component:CurrentProfileComponent},
  {path:'update-profile/:id',component:UpdateCurrentProfileComponent},
  {path:'profile-detail/:id',component:ProfileDetailComponent},
  {path:'profile-display',component:ProfileDisplayComponent}, 
  {path:'notifications',component:NotificationsComponent}, 
  {path:'requested-profile/:id',component:RequestedProfileComponent}, 
  {path:'waiting-profile/:id',component:WaitingProfileComponent}, 
  {path:'search-profile',component:ProfileSearchComponent}, 
  {path:'fav',component:FavoritesComponent}, 
  {path:'match-making',component:MatchMakingComponent}, 
  {path:'privacy-policy',component:PrivacyPolicyComponent}, 
  {path:'terms-conditions',component:TermsConditionsComponent}, 

  {path:'admin-home',component:AdminHomeComponent},
  {path:'contact',component:ContactDetailsComponent},
  {path:'report',component:ReportDetailsComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'profile-list',component:ProfileListComponent},
  {path:'profile-list-display/:id',component:ProfileListDisplayComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
