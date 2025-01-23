import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CarbonFootprintComputeService} from '../../../../services/carbon-footprint/carbon-footprint-compute.service';

@Component({
  selector: 'app-carbon-footprint-form',
  standalone: false,

  templateUrl: './carbon-footprint-form.component.html',
  styleUrl: './carbon-footprint-form.component.css'
})
export class CarbonFootprintFormComponent{

  formVoyage: FormGroup;
  isSubmitted = false;

  constructor(private carbonService: CarbonFootprintComputeService) {
    this.formVoyage = new FormGroup({
      travelType: new FormControl('', Validators.required),
      distance: new FormControl('', [Validators.required, Validators.min(1)]),
      consommation: new FormControl('', [Validators.min(0)]),
      date: new FormControl('', Validators.required)
    });
  }



  addVoyage(): void {
    this.isSubmitted = true;
    if (this.formVoyage.invalid) {
      return;
    }
    const { distance, consommation, travelType,date } = this.formVoyage.value;
    this.carbonService.calculConsoCo2({distance: distance, consommation: consommation,type: travelType,date:date});
    this.formVoyage.reset();
    this.isSubmitted = false;
  }

}
