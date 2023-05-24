import { Component } from '@angular/core';
import { filter, from, map } from 'rxjs';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent {

  array1 = [1, 2, 4, 5, 6, 9];

  myObservable = from(this.array1);
  transformedObs = this.myObservable.pipe(map((val) => {
    return val * 5;
  })
    //  ,filter((val)=>{
    //   return val >= 25;
    //  })
  )

  filteredObs = this.transformedObs.pipe(filter((val) => {
    return val >= 25;
  })
  )

  ngOnInit() {
    this.filteredObs.subscribe((val) => {
      console.log(val);
    }, (error) => {
      alert(error.message)
    }, () => {
      alert('Observable has completed Emmiting all values')
    }
    );
  }
}
