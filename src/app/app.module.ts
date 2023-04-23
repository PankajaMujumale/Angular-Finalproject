import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './common/component/header/header.component';
import { FooterComponent } from './common/component/footer/footer.component';
import { SidebarComponent } from './common/component/sidebar/sidebar.component';
import { HomeComponent } from './home/home.component';


import { AuthguardComponent } from './authguard/authguard.component';
import { HttpClientModule } from '@angular/common/http';
import { FakeApiComponent } from './others/fake-api/fake-api.component';
import { PipesComponent } from './pipes/pipes.component';
import { FormsComponent } from './forms/forms.component';
import { FormsModule } from '@angular/forms';
import { FormComponent } from './form/form.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    HomeComponent,
   
    AuthguardComponent,
    FakeApiComponent,
    PipesComponent,
    FormsComponent,
    FormComponent,
  
   
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    
    
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
