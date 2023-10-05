import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarModel } from '../carmodel';
import { RouterLink, RouterOutlet} from '@angular/router'


@Component({
  selector: 'app-car-model',
  standalone: true,
  imports: [CommonModule,RouterLink, RouterOutlet],
  templateUrl: './car-model.component.html',
  
    

  styleUrls: ['./car-model.component.css']
})
export class CarModelComponent {
  @Input() carModel!: CarModel;
}
