import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrnextobservableComponent } from './errnextobservable.component';

describe('ErrnextobservableComponent', () => {
  let component: ErrnextobservableComponent;
  let fixture: ComponentFixture<ErrnextobservableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErrnextobservableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ErrnextobservableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
