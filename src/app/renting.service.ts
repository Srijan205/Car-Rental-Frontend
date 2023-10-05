import { Injectable } from '@angular/core';
import { CarModel } from './carmodel';

@Injectable({
  providedIn: 'root'
})
export class RentingService {
  // carModelList: CarModel[] = [];
  url = 'http://localhost:8080/api/cars';
  async getAllCarModels(): Promise<CarModel[]> {
    const data = await fetch(this.url);
    return await data.json() ?? [];
  }
  
  async getcarModelById(id: number): Promise<CarModel | undefined> {
    const data = await fetch(`${this.url}/${id}`);
    return await data.json() ?? {};
  }
  submitApplication(Name: string, email: string) {
    console.log(`Homes application received: Name: ${Name}, email: ${email}.`);
  }
}
