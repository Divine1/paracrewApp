import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HomeComponent } from './pages/home/home.component';
import { SupportComponent } from './pages/support/support.component';
import { HeaderComponent } from './pages/header/header.component';
import { FooterComponent } from './pages/footer/footer.component';
import { ElementSliderComponent } from './pages/element-slider/element-slider.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FloatingbarComponent } from './pages/floatingbar/floatingbar.component';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { CarousalComponent } from './pages/carousal/carousal.component';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { ContributorsComponent } from './pages/contributors/contributors.component';
import { ContributorsliderComponent } from './pages/contributorslider/contributorslider.component';
import { DonateComponent } from './pages/donate/donate.component';
import { DonationmetricsComponent } from './pages/donate/donationmetrics/donationmetrics.component';
import { ParacardComponent } from './pages/paracard/paracard.component';
import { ParapopupComponent } from './pages/parapopup/parapopup.component';


registerLocaleData(en);


function rootLoaderFactory(http:HttpClient){
  return new TranslateHttpLoader(http,"assets/i18n/",".json");
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SupportComponent,
    HeaderComponent,
    FooterComponent,
    ElementSliderComponent,
    FloatingbarComponent,
    CarousalComponent,
    ContributorsComponent,
    ContributorsliderComponent,
    DonateComponent,
    DonationmetricsComponent,
    ParacardComponent,
    ParapopupComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    TranslateModule.forRoot({
      loader:{
        provide: TranslateLoader,
        useFactory : rootLoaderFactory,
        deps: [HttpClient]
      }
    }),
    NzCarouselModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
