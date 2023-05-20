import { Component } from '@angular/core';
import { DataServiceService } from './services/data-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{

  vacantparkingCount = 0;
  occupiadarkingCount = 0;
  parkingCount = 0;
  overallStatus ='';
  title='';
  lastUpdTime ='';
  pageHeader='Welcome to Connected Parking System';
 
  
  findParkingDetails : FindAllBuildingSensorDataResponse= new FindAllBuildingSensorDataResponse();
  slotList : ParkingDetails[]=[];
  sensorsData : any;
  public   findAllBuildingSensorDataResponse:any;
  constructor(private apiData:DataServiceService){
     apiData.fetchAllSensorData().subscribe(responseData => {
      if(responseData){
    this.findParkingDetails=<FindAllBuildingSensorDataResponse>responseData;
    this.slotList = this.findParkingDetails.findAllBuildingSensorDataResponse;
    console.log(this.slotList);
    this.vacantparkingCount = this.findParkingDetails.tot_vac;
    this.occupiadarkingCount= this.findParkingDetails.tot_occ;
    this.parkingCount= (this.findParkingDetails.tot_vac +  this.findParkingDetails.tot_occ);
    this.lastUpdTime='Last updated : '+this.findParkingDetails.last_update;
    
    if(this.vacantparkingCount==0){
      this.title='Parking Full';
    }
    else{
      this.title = this.vacantparkingCount.toString() +' parking available out of '+ this.parkingCount.toString() ;
    }
      }else{
        alert('Problem retriving data. Please try after sometime.');
      }
      
    });
    
  }
  
 
  

}

export class ParkingDetails{
  building_sensor_dtl_id:any;
  building_floor:any;
  building_room:any;
  sensor_device_id:any;
  sensor_type:any;
  sensor_key:any;
  sensor_value:any;
  rcd_crt_timestamp:any;
  ref_img_data_path:any;
  del_ind:any;
  parking_slot_status:any;
  parking_slot_num:any;

};

export class FindAllBuildingSensorDataResponse{

  findAllBuildingSensorDataResponse : ParkingDetails[]=[];
  errorMsg:any;
  status:any;
  tot_vac:any;
  last_update:any;
  tot_occ:any;

}
