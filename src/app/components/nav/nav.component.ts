import { Component, OnInit } from '@angular/core';
import { EmotionsService } from '../../services/emotions.service';
import { AlertCenterService, Alert, AlertType } from 'ng2-alert-center';
import { Router, ActivatedRoute } from '@angular/router';
import { ServerResponseCode } from '../../constant/response.code.constants';
import { Channel } from '../../modal/channal';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit{

  public loading = false;
  channelList : Channel[];
  channals: any;
  userId : string;
  data : any;

  public constructor(public _alertService: AlertCenterService, private _router: Router, private route: ActivatedRoute, 
    private _emotionsService: EmotionsService, ) {

      this.userId ="123";

  };

  ngOnInit(): void{
   this.getAllVideo();
  }

  getAllVideo(){
    this.loading = true;
    this._emotionsService.getAllVideo().subscribe(
    

      success => {
        console.log(success);
          this.channelList = success;
          this.loading = false;
          var  channelLength = this.channelList.length;
      },
      err => {
        const alert = new Alert(AlertType.DANGER, '', 'Error while getting all jobs.', 5000, true);
        this._alertService.alert(alert);
        this.loading = false;
      });

      
  }

  call(link:string){

    this.loading = true;
    this._emotionsService.getEmotions(link,this.userId).subscribe(
    
      success => {
        console.log("Emmotion response "+success);
          this.data = success;
          this.callRoute(this.data);
          this.loading = false;
        
      },
      err => {
        const alert = new Alert(AlertType.DANGER, '', 'Error while getting all jobs.', 5000, true);
        this._alertService.alert(alert);
        this.loading = false;
      });

  }

 
  callRoute(data){
    console.log("Routing ",data);

       let emotionStatus;


    this._router.navigate(['./emotions'], { queryParams: { anger: data.emotion.anger,
      joy: data.emotion.joy,fear: data.emotion.fear,sadness: data.emotion.sadness,surprise: data.emotion.surprise,
    } });
  }



}