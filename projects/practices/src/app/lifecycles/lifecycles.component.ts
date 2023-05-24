import { Component, Input, VERSION } from '@angular/core';
import { Customer } from './customer';

@Component({
  selector: 'app-lifecycles',
  templateUrl: './lifecycles.component.html',
  styleUrls: ['./lifecycles.component.css']
})
export class LifecyclesComponent {

  @Input() message:string | undefined

  customer:Customer = new Customer()
  name = "Angular " + VERSION.major;


  content = "Hello";
  hideChild=false;

  constructor() {
    console.log("AppComponent:Contructed");
  }

  ngOnChanges() {
    console.log("AppComponent:ngOnChanges");
  }

  ngOnInit() {
    console.log("AppComponent:ngOnInit");
  }

  ngDoCheck() {
    console.log("AppComponent:DoCheck");
  }

  ngAfterContentInit() {
    console.log("AppComponent:ngAfterContentInit");
  }

  ngAfterContentChecked() {
    console.log("AppComponent:AfterContentChecked");
  }

  ngAfterViewInit() {
    console.log("AppComponent:AfterViewInit");
  }

  ngAfterViewChecked() {
    console.log("AppComponent:AfterViewChecked");
  }

  ngOnDestroy() {
    console.log("AppComponent:ngOnDestroy");
  }
}
