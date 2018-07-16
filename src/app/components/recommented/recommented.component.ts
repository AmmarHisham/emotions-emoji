import { Component } from '@angular/core';
import { EmotionsService } from '../../services/emotions.service';
import { AlertCenterService } from 'ng2-alert-center';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recommented',
  templateUrl: './recommented.component.html',
  styleUrls: ['./recommented.component.css']
})
export class RecommentedComponent{

  public constructor(public _alertService: AlertCenterService, private _router: Router, private route: ActivatedRoute, 
    private _emotionsService: EmotionsService, ) {

  };


}