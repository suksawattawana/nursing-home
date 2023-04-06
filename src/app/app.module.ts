import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { HomeComponent } from './component/content/home/home.component';
import { CenterprincipleComponent } from './component/content/centerprinciple/centerprinciple.component';
import { ServicerateComponent } from './component/content/servicerate/servicerate.component';
import { SymptomreportComponent } from './component/content/symptomreport/symptomreport.component';
import { OnlinebookingComponent } from './component/content/onlinebooking/onlinebooking.component';
import { PagenotfoundComponent } from './component/pagenotfound/pagenotfound.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    CenterprincipleComponent,
    ServicerateComponent,
    SymptomreportComponent,
    OnlinebookingComponent,
    PagenotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
