import { NgModule }                 from '@angular/core';
import { Routes, RouterModule }     from '@angular/router';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { BrowserModule }            from '@angular/platform-browser';
import { routing }                from './app.routes'; 
import { CommonModule }                     from '@angular/common';
import { HttpModule }                       from '@angular/http';
import { LoadingModule } from 'ngx-loading';
import{ ReactiveFormsModule,FormsModule } from '@angular/forms'; 
import { AppComponent } from './app.component';
import { SchedulerModule } from './services/scheduler.module';
import { NavComponent } from './components/nav/nav.component';
import { EmotionsComponent } from './components/emotions/emotions.component';
import { AlertCenterModule } from 'ng2-alert-center';
import { AlertCenterService } from 'ng2-alert-center';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { RecommentedComponent } from './components/recommented/recommented.component';


@NgModule({
    //put all your modules here
    //The imports key in the context of an @NgModule defines additional modules 
    //that will be imported into the current module
    imports: [ 
		BrowserModule,
	  SchedulerModule,
		routing,
		ReactiveFormsModule, FormsModule, CommonModule,HttpModule,LoadingModule,AlertCenterModule,BrowserAnimationsModule
	],
    // put all your components / directives / pipes here
   declarations: [ AppComponent, NavComponent, EmotionsComponent, RecommentedComponent],

    // put all your services here
    providers: [ 
      { provide: LocationStrategy, useClass: HashLocationStrategy},AlertCenterService
    ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }


