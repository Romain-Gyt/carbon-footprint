import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-carbon-footprint',
  standalone: false,
  templateUrl: './carbon-footprint.component.html',
  styleUrls: ['./carbon-footprint.component.css']
})
export class CarbonFootprintComponent implements OnInit, OnChanges, OnDestroy {
  distanceKm: number = 0;
  consommationPour100Km: number = 0;
  totalConsommationPour100Km: number = 0;  // Consommation totale calculée en fonction de la distance et consommation moyenne
  voyages = [
    { distanceKm: 50, consommationPour100Km: 5 },
    { distanceKm: 150, consommationPour100Km: 6 },
    { distanceKm: 250, consommationPour100Km: 7 },
    { distanceKm: 350, consommationPour100Km: 8 },
    { distanceKm: 450, consommationPour100Km: 9 }
  ];

  ngOnInit(): void {
    this.moyenneTrip();
  }

  ngOnChanges(): void {

  }

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
    this.voyages.push({ distanceKm: distance, consommationPour100Km: consommation });
    this.moyenneTrip();
  }

  moyenneTrip(): void {
    const totalVoyages = this.voyages.length;

    if (totalVoyages === 0) {
      this.distanceKm = 0;
      this.consommationPour100Km = 0;
      this.totalConsommationPour100Km = 0;
      return;
    }
    const { totalDistance, totalConsommation } = this.voyages.reduce(
      (totals, voyage) => ({
        totalDistance: totals.totalDistance + voyage.distanceKm,
        totalConsommation: totals.totalConsommation + voyage.consommationPour100Km,
      }),
      { totalDistance: 0, totalConsommation: 0 }
    );
    this.distanceKm = totalDistance ;
    this.consommationPour100Km = totalConsommation / totalVoyages;
    this.totalConsommationPour100Km = (this.distanceKm / 100) * this.consommationPour100Km;
  }

}
