import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UmcformComponent } from './umcform.component';

describe('UmcformComponent', () => {
  let component: UmcformComponent;
  let fixture: ComponentFixture<UmcformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UmcformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UmcformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
