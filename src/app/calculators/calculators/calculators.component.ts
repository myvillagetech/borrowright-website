import { Component } from '@angular/core';

@Component({
  selector: 'app-calculators',
  templateUrl: './calculators.component.html',
  styleUrls: ['./calculators.component.scss']
})
export class CalculatorsComponent {

  faqNumber:number = 0;

  changeFaqNumber(number : number){
    if(this.faqNumber === number){
      this.faqNumber = 0;
      return;
    }
    this.faqNumber = number;
  }

}
