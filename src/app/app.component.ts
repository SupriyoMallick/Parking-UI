import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  vacantparkingCount = 3;
  occupiadarkingCount = 3;
  parkingCount = 6;
  title = 'Now '+this.vacantparkingCount.toString() +' parking available out of '+ this.parkingCount.toString() ;
  pageHeader='Welcome to Connected Parking System';
 
  parkingDtl: any[]=[
    {floorNo:1,areaNo:1,slotNo:1,status:'Vacant'},
    {floorNo:1,areaNo:1,slotNo:2,status:'Vacant'},
    {floorNo:1,areaNo:1,slotNo:3,status:'Vacant'},
    {floorNo:1,areaNo:1,slotNo:4,status:'Occupiad'},
    {floorNo:1,areaNo:1,slotNo:5,status:'Occupiad'},
    {floorNo:1,areaNo:1,slotNo:6,status:'Occupiad'}
  ]
 

}
