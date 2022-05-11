import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HomeComponent } from './pages/home/home.component';
import { SupportComponent } from './pages/support/support.component';


function rootLoaderFactory(http:HttpClient){
  return new TranslateHttpLoader(http,"assets/i18n/",".json");
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SupportComponent
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
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
