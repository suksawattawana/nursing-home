import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CenterprincipleComponent } from './centerprinciple.component';

describe('CenterprincipleComponent', () => {
  let component: CenterprincipleComponent;
  let fixture: ComponentFixture<CenterprincipleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CenterprincipleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CenterprincipleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
