import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { RentingService } from '../renting.service';
import { CarModel } from '../carmodel';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { DatepickerComponent } from '../datepicker/datepicker.component';


@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule,  ReactiveFormsModule, DatepickerComponent],
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {

  route: ActivatedRoute = inject(ActivatedRoute);
  // rentingService = inject(RentingService);
  carModel: CarModel | undefined;
  applyForm = new FormGroup({
    Name: new FormControl(''),
    email: new FormControl('')
  });
  price: any;
  constructor(private rentingService: RentingService) {
    const carModelId = parseInt(this.route.snapshot.params['id'], 10);
    this.rentingService.getcarModelById(carModelId).then(carModel => {
      this.carModel = carModel;
      this.price = carModel?.price;
    });
  }
  submitApplication() {
    this.rentingService.submitApplication(
      this.applyForm.value.Name ?? '',
      this.applyForm.value.email ?? ''
    );
  }

}
