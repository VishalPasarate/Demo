import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  abc:'' | undefined;
  session:any;
  saveData(){
    let data = {id:1, name:'xyz'};
    localStorage.setItem('session', JSON.stringify(data))
  }

}
