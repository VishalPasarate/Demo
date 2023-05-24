import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { map } from 'rxjs';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DataService } from '../data.service';
import { Questions } from '../que';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  formValue!: FormGroup

  constructor( private formBuilder: FormBuilder,private _http: HttpClient, private api:DataService,
    private _fb: FormBuilder,){
    this.formValue = this._fb.group({
      firstName: '',
    })
  }

  addData(data:any) { 
    this.api.addData(data).subscribe((res: any) => {
      alert("Data Addded")
      
    })
  } 
  resetData(){
    this.formValue.reset();
  }
}
