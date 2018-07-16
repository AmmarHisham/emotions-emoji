import { Component, Input, Output, EventEmitter }                              from '@angular/core';
import { Injectable }                                                          from '@angular/core';
import { Http, Response, Headers, RequestOptions, RequestMethod, RequestOptionsArgs, URLSearchParams } from '@angular/http';
import { Subject }                                                             from 'rxjs/Rx';
import { Observable }                                                          from 'rxjs/Rx';
import { URLs } from '../constant/urls.constants';
import 'rxjs/add/operator/map';

@Injectable()
export class EmotionsService {

    private options = new RequestOptions(
        {headers: new Headers({'Content-Type': 'application/json'})});

    constructor(
        private _http: Http) {
    }
    
    getAllVideo() : Observable<any> {
        return this._http.get(URLs.getAllTodosMockURL,this.options)
        .map(resData =>{ 
            return resData.json()}); 
    }

    getEmotions(link:string,userId:string) : Observable<any> {

        //var buildURL = URLs.getEmotionsMockURL+"/"+link+"/"+userId;

        // Mock URL
        var buildURL = URLs.getEmotionsMockURL;

        return this._http.get(buildURL,this.options)
        .map(emotionResData =>{ 
            return emotionResData.json()}); 
    }



}