import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { EmotionsService } from '../../services/emotions.service';
import { AlertType, Alert, AlertCenterService } from 'ng2-alert-center';
import { Emotion } from '../../modal/emotion';

@Component({
  templateUrl: './emotions.component.html',
  styleUrls: ['./emotions.component.css']
})
export class EmotionsComponent implements OnInit {
  jobNameStatus: String;
  public loading = false;
  emotions: Emotion; 
  myImgUrl:string;


  public constructor(public _alertService: AlertCenterService, private _router: Router, private route: ActivatedRoute, private _fb: FormBuilder
    , private _emotionsService: EmotionsService, ) {

  };

  ngOnInit() {


    this.loading = false;

    console.log("Route : ",this.route);

    this.route.queryParams.subscribe((params: Params) => {
      this.loading = false;
      this.emotions = Object.create(params,{});
    
      let key = Object.keys(params).reduce((a, b) => params[a] > params[b] ? a : b);  
      console.log( ` max key: ${key}` );

      this.myImgUrl = `assets/img/${key}.png`;



    });


  }

 
}
