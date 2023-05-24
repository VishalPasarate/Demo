import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject, Observable } from 'rxjs';
import { takeUntil, map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'weather';
  private unsubscribe$ = new Subject<void>();


  countries = [
    {
      name: 'India',
      cities: ['Mumbai', 'Delhi', 'Pune', 'Aurangabad']
    },
    {
      name: 'United Kingdom',
      cities: ['London', 'Warwick', 'Birmingham']
    },
    {
      name: 'United States',
      cities: ['New York', 'Chicago', 'Washington']
    },
    {
      name: 'Australia',
      cities: ['Sydney', 'Adelaide', 'Melbourne']
    },
    {
      name: 'Pakistan',
      cities: ['Lahore', 'Karachi', 'Islamabad']
    }
  ];

  countryControl!: FormControl;
  cityControl!: FormControl;

  cities$: Observable<string> | undefined;

  constructor(private router: Router) { }

  ngOnInit() {
    this.cityControl = new FormControl('');
    this.cityControl.valueChanges
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(value => {
        this.router.navigate([value]);
      });

    this.countryControl = new FormControl('');

    this.cities$ = this.countryControl.valueChanges.pipe(
      map(country => country.cities)
    );
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
