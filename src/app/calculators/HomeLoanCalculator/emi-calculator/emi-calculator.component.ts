import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-emi-calculator',
  templateUrl: './emi-calculator.component.html',
  styleUrls: ['./emi-calculator.component.scss']
})
export class EmiCalculatorComponent implements OnInit{
  loanAmount: number = 500000;
  loanTenure: number = 5;
  rateOfInterest:any = 6;

  emiPerMonth : number = 0;
  interstPayable: number = 0;
  totalAmountPayable: number = 0;
  emiDetails:any;
  emiBreakup:any;
  payableAmountPercentage : number = 80;
  showMonthlyPaymentList:number = -1;
  selectedLoanType: string = 'homeLoan';
  prePaymentAmount: number = 1000;
  numberOfEmisPaid: number = 0;
  savingsInInterest: number= 0;
  originalEmi: number = 0;
  revisedEmi: number = 0;


  minLoanAmountLabel: string = '5 Lac';
  maxLoanAmountLabel: string = '20Cr';
  minLoanTenure: number = 5;
  maxLoanTenure: number = 30;
  minRateOfInterest: number = 6;
  maxRateOfInterest: number = 20;

  minLoanAmount: number = 500000;
  maxLoanAmount: number = 200000000;
  homeLoanType: string = 'emi';

  minPrePaymentAmountLabel: string = '1 K';
  maxPrePaymentAmountLabel: string = '10.0 L';

  minEmisPaid: number = 0;
  maxEmisPaid: number = 0;

  minPrePaymentAmount: number = 1000;
  maxPrePaymentAmount: number = 1000000;



  constructor(
    private httpClient: HttpClient,
    private activatedRoutes: ActivatedRoute,
    private router: Router
  ){}

  ngOnInit(): void {

    this.activatedRoutes.queryParams.subscribe((res:any)=>{
      if(res.type === 'prePayment'){
        this.homeLoanType = 'prePayment'
      }else {
        this.homeLoanType = 'emi'
      }
    });

    this.emiCalculator()
  }


  emiCalculator(){
    if(this.homeLoanType === 'emi'){
      this.httpClient.post('https://core.urbanmoney.com/app-flow/calculator/emi',{
        principal : this.loanAmount,
        rate: this.rateOfInterest,
        tenureInMonths: this.loanTenure *12
      }).subscribe((res : any)=>{
        this.emiDetails = res.data.Emi;
        this.emiBreakup = res.data.EmiBreakup;
        this.emiPerMonth = res.data.Emi.emi;
        this.interstPayable = res.data.Emi.interstPayable;
        this.totalAmountPayable = res.data.Emi.totalAmountPayable;

        this.payableAmountPercentage = (this.loanAmount/this.totalAmountPayable)*100;

      });
    }else{
      this.httpClient.post('https://core.urbanmoney.com/app-flow/calculator/prepayment',{
        principal : this.loanAmount,
        rate: this.rateOfInterest,
        tenureInMonths: this.loanTenure *12,
        noOfEmiPaid: this.numberOfEmisPaid,
        prePaymentAmount: this.prePaymentAmount
      }).subscribe((res : any)=>{
        // this.emiDetails = res.data.Emi;
        // this.emiBreakup = res.data.EmiBreakup;
        // this.emiPerMonth = res.data.Emi.emi;
        // this.interstPayable = res.data.Emi.interstPayable;
        this.savingsInInterest = res.data.savingsInInterest;
        this.originalEmi = res.data.originalEmi;
        this.revisedEmi = res.data.revisedEmi

        this.payableAmountPercentage = (this.originalEmi/(this.originalEmi + this.revisedEmi))*100;

      });
    }
  }

  handleMonthlyBreakupList(index: number){
    if(index === this.showMonthlyPaymentList){
      this.showMonthlyPaymentList = -1
    }else {
      this.showMonthlyPaymentList = index
    }
  }

  handleLoanTypeChange(type: string){
    if(type === 'home'){
      this.loanAmount = 500000;
      this.loanTenure = 5;
      this.rateOfInterest = 6;
      this.maxLoanAmountLabel = '20Cr';
      this.minLoanAmountLabel = '5 Lac';
      this.minLoanTenure = 5;
      this.maxLoanTenure = 30;
      this.minRateOfInterest = 6;
      this.maxRateOfInterest = 20;
      this.minLoanAmount = 500000;
      this.maxLoanAmount = 200000000;
    }else if(type === 'personal'){
      this.loanAmount = 1000000;
      this.loanTenure = 5;
      this.rateOfInterest = 9;
      this.minLoanAmountLabel = '50 k';
      this.maxLoanAmountLabel = '1 Cr';
      this.minLoanTenure = 1;
      this.maxLoanTenure = 5;
      this.minRateOfInterest = 8;
      this.maxRateOfInterest = 25;

      this.minLoanAmount = 50000;
      this.maxLoanAmount = 10000000;
    }else{
      this.loanAmount = 1500000;
      this.loanTenure = 5;
      this.rateOfInterest = 11;
      this.maxLoanAmountLabel = '1 Cr';
      this.minLoanAmountLabel = '50 k';
      this.minLoanTenure = 1;
      this.maxLoanTenure = 5;
      this.minRateOfInterest = 8;
      this.maxRateOfInterest = 25;

      this.minLoanAmount = 50000;
      this.maxLoanAmount = 10000000;
    }
    this.emiCalculator();
  }

  changeHomeLoanType(type: string){
    if(type === 'prePayment'){
      this.router.navigate(['emiCalculator'],{queryParams:{type:'prePayment'}});
    }else{
      this.router.navigate(['emiCalculator']);
    }
    this.emiCalculator();
  }



}
