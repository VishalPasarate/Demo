import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  post: any;

  constructor(private _http: HttpClient) { }

  addData(data: any): Observable<any> {
    return this._http.post('http://localhost:3000/posts', data);
  }

}
