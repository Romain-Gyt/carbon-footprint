import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarbonFootprintComputeService {

  private voyages: any[] = []

  constructor() {
    this.voyages = [
      { distanceKm: 50, consommationPour100Km: 5, co2: (50 * 5) / 100 * 2.3 },
      { distanceKm: 150, consommationPour100Km: 6, co2: (150 * 6) / 100 * 2.3 },
      { distanceKm: 250, consommationPour100Km: 7, co2: (250 * 7) / 100 * 2.3 },
      { distanceKm: 350, consommationPour100Km: 8, co2: (350 * 8) / 100 * 2.3 },
      { distanceKm: 450, consommationPour100Km: 9, co2: (450 * 9) / 100 * 2.3 }
    ];
  }

  getVoyages(): any[] {
    return this.voyages
  }

  addVoyage(voyage: any) {
    this.voyages.push(voyage);
  }

  getResumeVoyage(): any{
    const totalVoyage = this.voyages.length;
    const { totalDistance, totalConsommation, totalCo2 } = this.voyages.reduce(
        (totals, voyage) => ({
          totalDistance: totals.totalDistance + voyage.distanceKm,
          totalConsommation: totals.totalConsommation + voyage.consommationPour100Km,
          totalCo2: totals.totalCo2 + voyage.co2,
        }),
        { totalDistance: 0, totalConsommation: 0,totalCo2: 0 }
      );
      const moyenneConso: number = totalConsommation/totalVoyage;
      return { totalDistance, moyenneConso, totalCo2 };
  }


}
