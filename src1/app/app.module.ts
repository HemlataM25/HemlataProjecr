import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { PpDisplayComponent } from './plans/pp-display/pp-display.component';
import { PpRegComponent } from './plans/pp-reg/pp-reg.component';


@NgModule({
  declarations: [
    AppComponent,
    PpDisplayComponent,
    PpRegComponent,
    
    
    
    
  ],
  imports: [
    BrowserModule,
    FormsModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
