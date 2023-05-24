import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {

  @Output() formParent:EventEmitter<any>=new EventEmitter()

  ngOnInit(){
    this.formParent.emit({name:'Vishal'})
  }
}
