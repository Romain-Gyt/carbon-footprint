import { Component, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { CarbonFootprintComputeService } from '../../services/carbon-footprint/carbon-footprint-compute.service';

@Component({
  selector: 'app-carbon-footprint',
  standalone: false,
  templateUrl: './carbon-footprint.component.html',
  styleUrls: ['./carbon-footprint.component.css']
})
export class CarbonFootprintComponent implements OnInit, OnChanges, OnDestroy {
  distanceKm: number = 0;
  consommationPour100Km: number = 0;
  totalConsommationPour100Km: number = 0;
  totalCo2: number = 0;
  voyages: any[] = [];

  constructor(private carbonFootPrintService: CarbonFootprintComputeService) {}

  ngOnInit(): void {
    this.voyages = this.carbonFootPrintService.getVoyages();
    this.updateStatistics();
  }

  ngOnChanges(): void {}

  ngOnDestroy(): void {
    console.log('Le composant carbon footprint a été détruit');
  }

  add100Km(): void {
    this.distanceKm += 100;
  }

  private getRandomInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  generateTrip(): void {
    const distance = this.getRandomInt(50, 2000);
    const consommation = this.getRandomInt(4, 10);
    const c02 = (distance * consommation) / 100 * 2.3
    this.carbonFootPrintService.addVoyage({ distanceKm: distance, consommationPour100Km: consommation,co2: c02 });
    this.updateStatistics();
  }

  private updateStatistics(): void {
    const { totalDistance, moyenneConso, totalCo2 } = this.carbonFootPrintService.getResumeVoyage();
    this.distanceKm = totalDistance;
    this.consommationPour100Km = moyenneConso;
    this.totalCo2 = totalCo2;
    this.totalConsommationPour100Km = (this.distanceKm / 100) * this.consommationPour100Km;
  }
}
