import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicerateComponent } from './servicerate.component';

describe('ServicerateComponent', () => {
  let component: ServicerateComponent;
  let fixture: ComponentFixture<ServicerateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicerateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicerateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
