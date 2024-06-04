import { Component, inject } from '@angular/core';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { HousingLocation } from '../housinglocation';
import { CommonModule } from '@angular/common'; // Ensure this import is from '@angular/common'
import { HousingService } from '../housing.service';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HousingLocationComponent,CommonModule],
  template: `
    <section>
      <form>
        <input type="text" placeholder="Filter by city">
        <button class="primary" type="button">Search</button>
      </form>
    </section>
    <section class="results">
      <app-housing-location *ngFor="let housingLocation of housingLocationList" [housingLocation]="housingLocation">
      </app-housing-location>
    </section>`,
  styleUrl: './home.component.css'
})

export class HomeComponent {

  constructor() {
    this.housingLocationList = this.housingService.getAllHousingLocations();
  }

  housingLocationList: HousingLocation[] = []
  housingService: HousingService = inject(HousingService);
  
}