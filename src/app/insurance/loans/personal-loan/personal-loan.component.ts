import { Component } from '@angular/core';

@Component({
  selector: 'app-personal-loan',
  templateUrl: './personal-loan.component.html',
  styleUrls: ['./personal-loan.component.scss']
})
export class PersonalLoanComponent {

  selectedFaq : number = -1
  faqsList: any = [
    {
      question: "How does a personal loan work?",
      answer: "A personal loan can be availed when you need an unsecured line of credit. Once you complete and submit your personal loan application, it is approved and verified by the lender. After the verification process, the loan amount will be disbursed to the applicant’s bank account. At the beginning of the tenure, you will be required to repay the loan in pre-decided EMI payments.",
    },
    {
      question: "What is the maximum amount of loan I can get?",
      answer: "The maximum loan amount that can be sanctioned for you depends on the monthly income and various other factors. However, there are numerous lenders in the country that offer as much as Rs. 40 lakhs.",
    },
    {
      question: "What is the minimum salary needed to apply for a personal loan?",
      answer: "The minimum salary requirement for a personal loan application varies from lender to lender. However, most lenders prefer that the applicant should be drawing an income of at least Rs. 15,000. If you are living in a metropolitan area, the minimum salary requirement is between Rs. 20,000 to Rs. 25,000.",
    },
    {
      question: "Do personal loans offer tax exemptions?",
      answer: "Yes, personal loans offer tax exemptions if the amount is being used for home renovation, business expansion or education purposes.",
    },
    {
      question: "What should I do if my personal loan application is rejected?",
      answer: "If your personal loan application has been rejected, it is either because of a low credit score or because you do not meet the basic eligibility requirements. Taking steps to improve your credit score can go a long way in future application approvals.",
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
