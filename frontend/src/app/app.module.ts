import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { ProfileCardComponent } from './components/profile-card/profile-card.component';
import { ProfileDetailComponent } from './components/profile-detail/profile-detail.component';
import { RequestedProfileComponent } from './components/requested-profile/requested-profile.component';
import { ProfileFormComponent } from './forms/profile-form/profile-form.component';
import { UpdateCurrentProfileComponent } from './forms/update-current-profile/update-current-profile.component';
import { AdminHeaderComponent } from './layouts/header/admin-header/admin-header.component';
import { UserHeaderComponent } from './layouts/header/user-header/user-header.component';
import { UserFooterComponent } from './layouts/footer/user-footer/user-footer.component';
import { AdminFooterComponent } from './layouts/footer/admin-footer/admin-footer.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { ReportUsComponent } from './pages/report-us/report-us.component';
import { CurrentProfileComponent } from './pages/current-profile/current-profile.component';
import { FavoritesComponent } from './pages/favorites/favorites.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { OpenPageComponent } from './pages/open-page/open-page.component';
import { MatchMakingComponent } from './pages/match-making/match-making.component';
import { NotificationsComponent } from './pages/notifications/notifications.component';
import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy.component';
import { ProfileDisplayComponent } from './pages/profile-display/profile-display.component';
import { ProfileIntroComponent } from './pages/profile-intro/profile-intro.component';
import { ProfileSearchComponent } from './pages/profile-search/profile-search.component';
import { RegisterNowComponent } from './pages/register-now/register-now.component';
import { WaitingProfileComponent } from './pages/waiting-profile/waiting-profile.component';
import { TermsConditionsComponent } from './pages/terms-conditions/terms-conditions.component';
import { AdminHomeComponent } from './pages/admin/admin-home/admin-home.component';
import { ContactDetailsComponent } from './pages/admin/contact-details/contact-details.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { ProfileListComponent } from './pages/admin/profile-list/profile-list.component';
import { ProfileListDisplayComponent } from './pages/admin/profile-list-display/profile-list-display.component';
import { ReportDetailsComponent } from './pages/admin/report-details/report-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LandFooterComponent } from './layouts/footer/land-footer/land-footer.component';
import { LandHeaderComponent } from './layouts/header/land-header/land-header.component';

@NgModule({
  declarations: [
    AppComponent,
    FeedbackComponent,
    ProfileCardComponent,
    ProfileDetailComponent,
    RequestedProfileComponent,
    ProfileFormComponent,
    UpdateCurrentProfileComponent,
    AdminHeaderComponent,
    UserHeaderComponent,
    UserFooterComponent,
    AdminFooterComponent,
    AboutUsComponent,
    ContactUsComponent,
    ReportUsComponent,
    CurrentProfileComponent,
    FavoritesComponent,
    HomePageComponent,
    LoginPageComponent,
    OpenPageComponent,
    MatchMakingComponent,
    NotificationsComponent,
    PrivacyPolicyComponent,
    ProfileDisplayComponent,
    ProfileIntroComponent,
    ProfileSearchComponent,
    RegisterNowComponent,
    WaitingProfileComponent,
    TermsConditionsComponent,
    AdminHomeComponent,
    ContactDetailsComponent,
    DashboardComponent,
    ProfileListComponent,
    ProfileListDisplayComponent,
    ReportDetailsComponent,
    LandFooterComponent,
    LandHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
