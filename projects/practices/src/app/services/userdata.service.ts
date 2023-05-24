import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {

  constructor() { }
  getAllData(){
    return [
      {
        name:'Vishal',
        age:27,
        email:'vishal@123'
      },
      {
        name:'Jay',
        age:29,
        email:'jay@123'
      },
      {
        name:'Manav',
        age:33,
        email:'manav@123'
      },
    ]
  }
}
