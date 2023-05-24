import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UmcformComponent } from './umcform/umcform.component';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GridModule, PagerModule } from '@syncfusion/ej2-angular-grids';


@NgModule({
  declarations: [
    AppComponent,
    UmcformComponent,
    ChildComponent,
    ParentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    GridModule, PagerModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
