import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarModelComponent } from '../car-model/car-model.component';
import { RentingService } from '../renting.service';
import { CarModel } from '../carmodel';


@Component({
  selector: 'app-car',
  standalone: true,
  imports: [
    CommonModule,
    CarModelComponent
  ],
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent{
  carModelList: CarModel[] = [];
  filteredModelList: CarModel[] = [];
  // rentingService: RentingService = Inject(RentingService);
  filterResults(text: string) {
    if (!text) {
      this.filteredModelList = this.carModelList;
    }
  
    this.filteredModelList = this.carModelList.filter(
      carModel => carModel?.model.toLowerCase().includes(text.toLowerCase())
    );
    console.log(this.filteredModelList);
  }

  constructor(private rentingService: RentingService) {
      this.rentingService.getAllCarModels().then((carModelList: CarModel[]) => {
        this.carModelList = carModelList;
        this.filteredModelList = carModelList;
      });
    }
  }
