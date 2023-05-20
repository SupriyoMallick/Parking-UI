import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  fetchAllSensorDataUrl ="/findAllSensorData";
 
  constructor(private http:HttpClient) {
   
  }

  requestbody= {"sensorDeviceId": "ESP8266-PARKING-DEMO"};
  httpOptions = { 
    headers: new HttpHeaders({
      'Accept':'application/json',
    'Content-Type': 'application/json',
    'auth_key':'jfdifj94j32jskdj39j39dswkd39dkdomkod',
    'Cache-Control':'no-cache, no-store'
    
  })
};

  
  fetchAllSensorData() { 
    return this.http.post(this.fetchAllSensorDataUrl, this.requestbody, this.httpOptions);
  }
} 
