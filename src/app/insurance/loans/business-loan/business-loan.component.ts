import { Component } from '@angular/core';

@Component({
  selector: 'app-business-loan',
  templateUrl: './business-loan.component.html',
  styleUrls: ['./business-loan.component.scss']
})
export class BusinessLoanComponent {
  selectedFaq : number = -1

  handleSelectedFaq(index: number){
    if(index === this.selectedFaq){
      this.selectedFaq = -1;
      return;
    }else{
      this.selectedFaq = index
    }
  }

  businessLoanFaqs: any = [
    {
      question: "How do I get a loan to start a business?",
      answer: "To get a loan to start a business, you should count on a startup business loan. All you have to do is apply for a business loan, either online via the bank’s official website or offline by visiting its nearest branch.",
    },
    {
      question: "Which loan is best for business?",
      answer: "The loan that will be best for your business entirely depends upon the nature of your business. For instance, if you are a startup, then move forward with a startup business loan. In the case of a small business, count on a small business loan.",
    },
    {
      question: "What is the limit of a business loan?",
      answer: "At maximum, you can avail of a business loan of INR 30 lakh. However, it will depend upon certain factors, including the credibility of your business. At the same time, the business loan repayment period falls in the range of 12 to 60 months.",
    },
    {
      question: "Can I get a loan for a business?",
      answer: "Yes, you can get a loan for a business. However, you need to be eligible for a business loan. Additionally, having a good credit score, stable business growth, and good repayment history will increase the chances of loan approval.",
    },
    {
      question: "How to know what business loan amount am I eligible for?",
      answer: "The business loan amount you are eligible for is determined by your profile, business requirements, CIBIL score, nature of business, repayment history, annual turnover, and business stability.",
    },
    {
      question: "How to apply for a business loan?",
      answer: "You can apply for a business loan either through the bank or financial institution’s online portal or by visiting the branch in person. Make sure to keep the documents ready beforehand while applying for a business loan.",
    },
    {
      question: "Is a business loan a tax-saving deduction?",
      answer: "Yes, a business loan is a tax-saving deduction. Regardless of the type of business loan, i.e., working capital loan, equipment finance, startup business loan, etc., interest paid is tax-deductible.",
    },
    {
      question: "What are the documents needed for business loans for a salaried applicant?",
      answer: "For a salaried applicant, documents, including proof of identity, duly filled application form, ITR proof, age proof, and income proof, will be required for a business loan application.",
    },
    {
      question: "What is the minimum turnover requirement for a business loan?",
      answer: "The minimum turnover requirement for a business loan is INR 40 lakhs.",
    },
  ];
}
