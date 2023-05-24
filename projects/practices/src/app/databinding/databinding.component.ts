import { Component } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent {

  constructor(){}
  ngOnInit():void{}
  slogan : string ='Your one stop shop for everything';
  source : string = '/assets/istockphoto-1254508881-612x612.jpg'

  getSlogan(){
    return 'This is s new Slogan'
  }
}
