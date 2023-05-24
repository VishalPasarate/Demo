import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { UserdataService } from './services/userdata.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'practices';
  Value = "This is Parent Data"
  allData:any=[''];
  formParent(data: any) {
    console.log(data)
  }

  constructor(private dataservice: DataService, private api:UserdataService) {
    this.allData= this.api.getAllData();
  }
  ngOnInit(): void { }

  value = 5;


}
