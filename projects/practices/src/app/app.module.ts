import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ObservableComponent } from './observable/observable.component';
import { ErrnextobservableComponent } from './errnextobservable/errnextobservable.component';
import { MapComponent } from './map/map.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';
import { RformComponent } from './rform/rform.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { EventbindingComponent } from './eventbinding/eventbinding.component';
import { TwowaybindingComponent } from './twowaybinding/twowaybinding.component';
import { DirectivesComponent } from './directives/directives.component';
import { LifecyclesComponent } from './lifecycles/lifecycles.component';
import { FormComponent } from './form/form.component';
import { StorageComponent } from './storage/storage.component';
import { NgforComponent } from './ngfor/ngfor.component';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';
import { SquarePipe } from './square.pipe';
import { HideshowDirective } from './customdirective/hideshow.directive';

@NgModule({
  declarations: [
    AppComponent,
    ObservableComponent,
    ErrnextobservableComponent,
    MapComponent,
    Comp1Component,
    Comp2Component,
    RformComponent,
    DatabindingComponent,
    EventbindingComponent,
    TwowaybindingComponent,
    DirectivesComponent,
    LifecyclesComponent,
    FormComponent,
    StorageComponent,
    NgforComponent,
    ChildComponent,
    ParentComponent,
    SquarePipe,
    HideshowDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
