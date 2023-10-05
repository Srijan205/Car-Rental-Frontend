import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-datepicker',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.css']
})
export class DatepickerComponent {
  @Input() price : number | undefined;
  ngOnInit(): void {
    this.pastDateTime();
  }
  min: any = "04-10-2021T12:10"
  pastDateTime(){
    var tdate: Date = new Date();
    var date : string | number = tdate.getDate();
    if(date < 10){
      date = "0" + date;
    }
    var month: string | number = tdate.getMonth() + 1;
    if(month < 10){
      month  = "0" + month;
    }
    var year: number = tdate.getFullYear();
    var hours: number = tdate.getHours();
    var minutes: number = tdate.getMinutes();
    this.min = year + "-" + month + "-" + date + "T" + hours + ":" + minutes;
    console.log(this.min);
  }
  caution: string = "";
  startDate: number = 0;
  endDate: number = 0;
  values: string = "";
  mini: string  = "";
  endvalue: string = "";
  final_price: number = 0;
  onChangeStart(value: string){
    var todate:number = new Date().getTime();
    var selectDate:number = new Date(value).getTime();
    if(todate > selectDate){
      this.values = "";
      // alert("You can't choose previous Date and Time");
      this.caution = "You can't choose previous Date and Time";
    }else{
      this.caution = "";
    }
    console.log(selectDate);
    this.startDate = selectDate;
    this.mini = value;
  }
  onChangeEnd(value: string){
    var selDate: number = new Date(value).getTime();
    if(((this.startDate-selDate) >= 0) || (this.startDate-selDate)%3600000 != 0){
      this.endvalue = "";
      // alert("Booking should be in multiple of 1 hour");
      this.caution = "Booking should be in multiple of 1 hour";
    }else{
      this.caution = "";
    }
    this.endDate = selDate;
  }
  CalculateHours(){
    this.caution = "";
    if(this.price){
      this.final_price = this.price*(this.endDate- this.startDate)/(3600000);
    }
    if(this.endvalue == ""){
      this.final_price = 0;
    }
  }
  

}
