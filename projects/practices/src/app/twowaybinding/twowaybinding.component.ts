import { Component } from '@angular/core';

@Component({
  selector: 'app-twowaybinding',
  templateUrl: './twowaybinding.component.html',
  styleUrls: ['./twowaybinding.component.css']
})
export class TwowaybindingComponent {
  constructor() { }
  ngOnInit():void{}

  searchValue: string = '';

  changesearchval(eventData:any){
    this.searchValue = (<HTMLInputElement>eventData.target).value;
  }
}
