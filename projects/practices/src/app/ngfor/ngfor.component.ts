import { Component } from '@angular/core';

@Component({
  selector: 'app-ngfor',
  templateUrl: './ngfor.component.html',
  styleUrls: ['./ngfor.component.css']
})
export class NgforComponent {

  name = ['Vishal', 'Arnav', 'Nirav', 'Anubhav'];
  users = [
    {
      name: 'Vishal',
      age: 27
    },
    {
      name: 'Nirav',
      age: 26
    },
    {
      name: 'Abhijeet',
      age: 30
    },
    {
      name: 'Ram',
      age: 29
    },
    {
      name: 'Akash',
      age: 28
    },

  ]
}
