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
import { NbThemeModule, NbLayoutModule, NbButtonModule, NbCardModule, NbBadgeModule, NbIconModule, NbInputModule, NbFormFieldModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { FloatingbarComponent } from './pages/floatingbar/floatingbar.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { CarousalComponent } from './pages/carousal/carousal.component';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';

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
    CarousalComponent
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
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbLayoutModule,
    NbEvaIconsModule,
    NbButtonModule,
    NbCardModule,
    NbEvaIconsModule,
    NbIconModule,
    NbInputModule,
    NbFormFieldModule,
    NzCarouselModule,
    FormsModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
