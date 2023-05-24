import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-errnextobservable',
  templateUrl: './errnextobservable.component.html',
  styleUrls: ['./errnextobservable.component.css']
})
export class ErrnextobservableComponent {
constructor(private http:HttpClient){}
  myObservable = new Observable((observer)=>{
    console.log('Observable Starts')
    setTimeout(()=>{observer.next("1")},1000)
    setTimeout(()=>{observer.next("2")},2000)
    setTimeout(()=>{observer.next("3")},3000)
    // setTimeout(()=>{observer.error(new Error('Something went wrong'))},3000)
    setTimeout(()=>{observer.next("4")},4000)
    setTimeout(()=>{observer.next("5")},5000)
    setTimeout(()=>{observer.complete()},5000)
  });

  ngOnInit(){
    this.myObservable.subscribe((val)=>{
      console.log(val);
    }, (error)=>{
      alert(error.message)
    }, ()=> {
      alert('Observable has completed Emmiting all values')
    }

    );
  }
}
