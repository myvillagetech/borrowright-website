import { Component } from '@angular/core';

@Component({
  selector: 'app-home-loan',
  templateUrl: './home-loan.component.html',
  styleUrls: ['./home-loan.component.scss']
})
export class HomeLoanComponent {

  selectedFaq : number = -1
  faqArray: any = [
    {
      question: "What is the EMI for a Rs. 20 lakhs home loan?",
      answer: "The EMI for a Rs. 20 lakh home loan will depend upon the interest rate offered by the lender and loan repayment tenure.",
    },
    {
      question: "Which bank is best for applying for a home loan?",
      answer: "There are multiple premium banks (both private and public) in India offering attractive home loans and associated products. Some of them include HDFC, ICICI, Axis, and SBI.",
    },
    {
      question: "How much home loan can I get on a Rs. 30,000 salary?",
      answer: "With a salary of Rs. 30,000, you can avail of a home loan of up to Rs. 20.50 lakh based upon your credibility.",
    },
    {
      question: "What is the EMI for a Rs. 10 lakhs home loan?",
      answer: "The EMI for a Rs. 10 lakh home loan will fall somewhere between Rs. 8,000 and Rs. 10,000, based on chosen tenure and applicable interest rate.",
    },
    {
      question: "What credit score is required to get a home loan?",
      answer: "A credit score above 700 is mandatory to avail of a home loan at an attractive interest rate.",
    },
    {
      question: "How do I calculate the EMI on a home loan?",
      answer: "You can either compute the EMI through the mathematical formula i.e. EMI = {P x (R/100) x (1+R/100)^n} / {(1+R/100) ^n-1} or via home loan EMI calculator.",
    },
    {
      question: "How do I get a housing loan without a pay slip?",
      answer: "Numerous banks and finance providers offer home loans without payslips. However, you will have to provide bank statements, income proofs and PAN card details.",
    },
    {
      question: "Do I have to pay off all my credit card loans to get a home loan?",
      answer: "Yes, it is recommended to pay off your dues before applying for a home loan for easy approval.",
    },
    {
      question: "Is taking home loans good?",
      answer: "Taking home loans can benefit an individual for various reasons. They can purchase a new house, renovate an existing house, purchase a plot for construction, or rebuild a house. With several financial institutions in place, the interest rates are always competitive, giving customers the advantage of availing of a home loan within their budget as well.",
    },
    {
      question: "What should be the minimum salary to get a home loan?",
      answer: "The minimum salary requirement varies from bank to bank. However, in general, banks prefer their customers to have at least INR 15,000 to INR 25,000 per month in salary. This is mainly to establish their creditworthiness.",
    },
    {
      question: "Can home loan principal be claimed in 80C?",
      answer: "Yes, home loan principal can be claimed under Section 80C of the Income Tax Act of 1961. The maximum amount one can claim remains at INR 1.5 lakh per annum.",
    },
    {
      question: "Can a home loan be taken for a land purchase?",
      answer: "Yes, one can apply for a home loan for land purchase, given that the land will be used for residential purposes only. Moreover, there need to be documents showing the construction of a residential building has been approved or is already in progress.",
    },
    {
      question: "Can home loans be restructured?",
      answer: "Banks offer the provision to their borrowers to avail of the benefit of home loan restructuring. One can get this benefit if they are facing financial difficulties. This provision allows borrowers to avoid any EMI defaults. However, one must present valid reasons approved by the lenders in order to be able to enjoy the benefits of the policy.",
    },
    {
      question: "Can a home loan be taken for renovation?",
      answer: "Yes, many individuals take home loans to also finance their home renovation plans. However, they should consider researching before applying for a home loan to get the best loan interest rate that suits their budget.",
    },
    {
      question: "Can we increase the home loan tenure?",
      answer: "As notified by the Reserve Bank of India, borrowers have the provision to request a home loan tenure extension. They may do so to extend their repayment period and avoid any loan defaults.",
    },
    {
      question: "Can home loans be cancelled after sanction?",
      answer: "A loan sanction can be cancelled by both the borrower and the lender. In the case of the borrower, they should apply for a cancellation, preferably, before the loan amount is disbursed. However, the lenders can also cancel a home loan sanction in the event of any missing documents or procedural discrepancies.",
    },
    {
      question: "What is the maximum age for a home loan?",
      answer: "The maximum age to apply for a home loan generally varies from bank to bank. Usually, individuals can be of a maximum age of 65 to apply under the senior citizen loan scheme policies.",
    },
    {
      question: "Can I take out three home loans?",
      answer: "In India, the number of loans that can be taken by an individual is not legally defined. So, borrowers can apply for multiple loans from different banks. However, it should be noted that one should carefully consider their financial situation before proceeding with the application.",
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
