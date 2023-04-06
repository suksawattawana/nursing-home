import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SymptomreportComponent } from './symptomreport.component';

describe('SymptomreportComponent', () => {
  let component: SymptomreportComponent;
  let fixture: ComponentFixture<SymptomreportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SymptomreportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SymptomreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
