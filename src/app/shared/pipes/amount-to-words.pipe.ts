// amount-to-words.pipe.ts
import { Pipe, PipeTransform } from '@angular/core';
// var numberToWords = require('number-to-words');
import *as numberToWords from 'number-to-words'

@Pipe({
  name: 'amountToWords'
})
export class AmountToWordsPipe implements PipeTransform {
  transform(amount: number): string {
    if (amount === 1) {
      return 'One Rupee';
    }

    if (amount <= 2000000000) {
      return `${numberToWords.toWords(amount)} Rupees`;
    } else {
      return 'Unsupported Amount';
    }
  }
}
