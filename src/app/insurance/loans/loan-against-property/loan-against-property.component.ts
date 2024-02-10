import { Component } from '@angular/core';

@Component({
  selector: 'app-loan-against-property',
  templateUrl: './loan-against-property.component.html',
  styleUrls: ['./loan-against-property.component.scss']
})
export class LoanAgainstPropertyComponent {

  selectedFaq : number = -1
  loanAgainstPropertyFaqs: any = [
    {
      question: "Will I get a loan against my property?",
      answer: "Yes, you can get a loan against property if the property is registered in your name and you have the required set of documents. Additionally, you must be eligible to secure a loan against property.",
    },
    {
      question: "Is it possible to apply for a loan against property if it is a joint property?",
      answer: "Yes, it is possible to apply for a loan against property in the case of joint property. The co-owner of the property will become the co-applicant in the loan application. Additionally, the chances of securing a higher loan amount also increase.",
    },
    {
      question: "What is eligibility for a loan against property?",
      answer: "The loan against property eligibility criteria is quite simple. You must be between the ages of 21 and 65, have a yearly income of INR35,000, a good credit history, and the property must be registered in your name.",
    },
    {
      question: "What is the maximum term for which I can avail of a loan against property (LAP)?",
      answer: "You can avail of a loan against property (LAP) for a maximum of 20 years.",
    },
    {
      question: "Is there an application fee for a loan against property?",
      answer: "Yes, to avail of a loan against property, you need to pay an application fee of 1 percent of the loan amount plus applicable service tax.",
    },
    {
      question: "How will I know if my Loan Against Property application is approved?",
      answer: "On the approval of your loan application, the designated bank executive will get in touch with you for further processing. Additionally, you can check your loan status by visiting the bank’s official website.",
    },
    {
      question: "Is the interest rate for the loan against property standards between lenders?",
      answer: "No, interest rates vary from one lender to another based upon certain factors, such as credit history, loan tenure, income stability, location of the property, and much more.",
    },
    {
      question: "What is the maximum loan amount that I can avail of against the property?",
      answer: "You can borrow up to INR 7 crores against a property. However, the loan amount depends upon the market value of the property.",
    },
    {
      question: "Can I get a loan against a plot?",
      answer: "Yes, you can get a loan against a plot, residential property and commercial property.",
    },
    {
      question: "Can a loan against property be availed without income proof?",
      answer: "Yes, you can get a loan against property without income proof, but you will have to submit other required documents.",
    },
    {
      question: "Can a loan against property be availed without CIBIL?",
      answer: "Banks take the CIBIL score into consideration for evaluating a loan application. If you have bad credit, either your loan application will be rejected, or you will have to pay higher loan interest rates for it.",
    },
  ];

  handleSelectedFaq(index: number){
    if(index === this.selectedFaq){
      this.selectedFaq = -1;
      return;
    }else{
      this.selectedFaq = index
    }
  }
}
