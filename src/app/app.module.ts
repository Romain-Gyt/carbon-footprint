import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {CommonModule, registerLocaleData} from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { CarbonFootprintComponent } from './pages/carbon-footprint/carbon-footprint.component';
import { CarbonFootprintFormComponent } from './pages/carbon-footprint/components/carbon-footprint-form/carbon-footprint-form.component';
import { CarbonFootprintResultComponent } from './pages/carbon-footprint/components/carbon-footprint-result/carbon-footprint-result.component';
import {CarbonFootprintComputeService} from './services/carbon-footprint/carbon-footprint-compute.service';
registerLocaleData(localeFr);
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CarbonFootprintComponent,
    CarbonFootprintFormComponent,
    CarbonFootprintResultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    CarbonFootprintComputeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
