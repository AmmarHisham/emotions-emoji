import { NgModule }                         from '@angular/core';
import { CommonModule }                     from '@angular/common';
import { Routes, RouterModule }             from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule }                       from '@angular/http';
import { EmotionsService }                 from './emotions.service';

@NgModule({ 
    //put all your modules here
    //The imports key in the context of an @NgModule defines additional modules 
    //that will be imported into the current module
 
    imports: [ 
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        HttpModule
    ],

    // put all your components / directives / pipes here
    declarations:[
    ],

    // put all your services here
    providers: [
        EmotionsService
    ],
})

export class SchedulerModule{}