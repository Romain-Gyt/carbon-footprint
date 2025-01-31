import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarbonFootprintComponent } from './carbon-footprint.component';

describe('CarbonFootprintComponent', () => {
  let component: CarbonFootprintComponent;
  let fixture: ComponentFixture<CarbonFootprintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CarbonFootprintComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarbonFootprintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
