import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(public _http : HttpClient) { }

  get(url: string, headers:any = {'Content-Type':  'application/json'}): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders(headers)
    };
    return this._http.get(url, httpOptions)
  }

  post(url: string, body:object, headers:any = {'Content-Type':  'application/json'}): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders(headers)
    };
    return this._http.post(url, body, httpOptions);
  }
}



//todo en main service, fue copiado aca para que no moeste a la vista en el main service
/* location :any = {latitude: 0, longitude: 0};
  locationInfo :any = {language: "", country: ""}; */

/*   getSourcesByCountryAndLanguage(lat,long): void {
    

    // TODO: convert lat long to language and country

    this.locationInfo = {language: "en", country: "us" };

    
    this.getSourcesInfo(this.locationInfo.language,this.locationInfo.country)

  } */

  /* getSourcesByLocation(){


    if ("geolocation" in navigator) {
      // check if geolocation is supported/enabled on current browser
      navigator.geolocation.getCurrentPosition(
       function success(position) {
         // for when getting location is a success
         this.location = {'latitude': position.coords.latitude, 
                     'longitude': position.coords.longitude};

          
        this.getSourcesByCountryAndLanguage(this.location.latitude,this.location.longitude);           
            
       },
      function error(error_message) {
        // for when getting location results in an error
        console.error('An error has occured while retrieving location', error_message) });
    } else {
      // geolocation is not supported
      // get your location some other way
      console.log('geolocation is not enabled on this browser')
    }
  } */