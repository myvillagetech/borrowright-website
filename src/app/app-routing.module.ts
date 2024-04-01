import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LifeInsuranceComponent } from './insurance/life-insurance/life-insurance.component';
import { GeneralInsurancePlansComponent } from './insurance/general-insurance-plans/general-insurance-plans.component';
import { HomeLoanComponent } from './insurance/loans/home-loan/home-loan.component';
import { MainComponent } from './main/main.component';
import { PersonalLoanComponent } from './insurance/loans/personal-loan/personal-loan.component';
import { BusinessLoanComponent } from './insurance/loans/business-loan/business-loan.component';
import { LoanAgainstPropertyComponent } from './insurance/loans/loan-against-property/loan-against-property.component';
import { IDFCBankCreditCardComponent } from './creditCard/idfcbank-credit-card/idfcbank-credit-card.component';
import { YESBankCreditCardComponent } from './creditCard/yesbank-credit-card/yesbank-credit-card.component';
import { StandardCharteredCreditCardComponent } from './creditCard/standard-chartered-credit-card/standard-chartered-credit-card.component';
import { AxisBankCreditCardComponent } from './creditCard/axis-bank-credit-card/axis-bank-credit-card.component';
import { MutualFundsComponent } from './investment/mutual-funds/mutual-funds.component';
import { ELSSComponent } from './investment/elss/elss.component';
import { EmployeesProvidentFundComponent } from './investment/employees-provident-fund/employees-provident-fund.component';
import { FixedDepositComponent } from './investment/fixed-deposit/fixed-deposit.component';
import { NationalPensionSchemeComponent } from './investment/national-pension-scheme/national-pension-scheme.component';
import { NationalSavingsCertificateComponent } from './investment/national-savings-certificate/national-savings-certificate.component';
import { PublicProvidentFundComponent } from './investment/public-provident-fund/public-provident-fund.component';
import { RecurringDepositComponent } from './investment/recurring-deposit/recurring-deposit.component';
import { SeniorCitizenSavingSchemeComponent } from './investment/senior-citizen-saving-scheme/senior-citizen-saving-scheme.component';
import { SystematicInvestmentPlanComponent } from './investment/systematic-investment-plan/systematic-investment-plan.component';
import { VoluntaryProvidentFundComponent } from './investment/voluntary-provident-fund/voluntary-provident-fund.component';
import { EligibilityCalculatorComponent } from './eligibilityCalculator/eligibility-calculator/eligibility-calculator.component';
import { LoanComponent } from './insurance/loans/loan/loan.component';
import { InsuranceComponent } from './insurance/insurance/insurance.component';
import { CreditCardComponent } from './creditCard/credit-card/credit-card.component';
import { InvestmentComponent } from './investment/investment/investment.component';
import { CalculatorsComponent } from './calculators/calculators/calculators.component';
import { EmiCalculatorComponent } from './calculators/HomeLoanCalculator/emi-calculator/emi-calculator.component';
import { PrePaymentCalculatorComponent } from './calculators/HomeLoanCalculator/pre-payment-calculator/pre-payment-calculator.component';
import { BalanceTransferCalculatorComponent } from './calculators/HomeLoanCalculator/balance-transfer-calculator/balance-transfer-calculator.component';
import { BusinessBalanceTransferCalculatorComponent } from './calculators/BusinessLoanCalculator/balance-transfer-calculator/balance-transfer-calculator.component';
import { BusinessEmiCalculatorComponent } from './calculators/BusinessLoanCalculator/emi-calculator/emi-calculator.component';
import { BusinessPrePaymentCalculatorComponent } from './calculators/BusinessLoanCalculator/pre-payment-calculator/pre-payment-calculator.component';
import { PersonalBalanceTransferCalculatorComponent } from './calculators/PersonalLoanCalculator/balance-transfer-calculator/balance-transfer-calculator.component';
import { PersonalPrePaymentCalculatorComponent } from './calculators/PersonalLoanCalculator/pre-payment-calculator/pre-payment-calculator.component';
import { PersonalEmiCalculatorComponent } from './calculators/PersonalLoanCalculator/emi-calculator/emi-calculator.component';
import { IncomeTaxCalculatorComponent } from './calculators/financialCalculator/income-tax-calculator/income-tax-calculator.component';
import { HRACalculatorComponent } from './calculators/financialCalculator/hracalculator/hracalculator.component';
import { MutualFundCalculatorComponent } from './calculators/financialCalculator/mutual-fund-calculator/mutual-fund-calculator.component';
import { RDCalculatorComponent } from './calculators/financialCalculator/rdcalculator/rdcalculator.component';
import { SIPCalculatorComponent } from './calculators/financialCalculator/sipcalculator/sipcalculator.component';
import { GSTCalculatorComponent } from './calculators/financialCalculator/gstcalculator/gstcalculator.component';
import { TDSCalculatorComponent } from './calculators/financialCalculator/tdscalculator/tdscalculator.component';
import { LumpsumCalculatorComponent } from './calculators/financialCalculator/lumpsum-calculator/lumpsum-calculator.component';
import { PPFCalculatorComponent } from './calculators/financialCalculator/ppfcalculator/ppfcalculator.component';
import { FDCalculatorComponent } from './calculators/financialCalculator/fdcalculator/fdcalculator.component';
import { SalaryCalculatorComponent } from './calculators/financialCalculator/salary-calculator/salary-calculator.component';
import { SukanyaSamriddhiYojanaCalculatorComponent } from './calculators/financialCalculator/sukanya-samriddhi-yojana-calculator/sukanya-samriddhi-yojana-calculator.component';

const routes: Routes = [
  {
    path : '',
    pathMatch : 'full',
    redirectTo: 'home'
  },
  {
    path: '',
    component: MainComponent,
    children:[
      {
        path : "home",
        component: HomeComponent
      },
      {
        path : "lifeInsurance",
        component: LifeInsuranceComponent
      },

      {
        path : "generalaInsurancePlans",
        component: GeneralInsurancePlansComponent
      },

      {
        path : "homeLoan",
        component:HomeLoanComponent
      },

      {
        path : "personalLoan",
        component:PersonalLoanComponent
      },

      {
        path : "businessLoan",
        component:BusinessLoanComponent
      },

      {
        path : "loanAgainstProperty",
        component:LoanAgainstPropertyComponent
      },

      {
        path : "IDFCBankCreditCard",
        component:IDFCBankCreditCardComponent
      },

      {
        path : "YESBankCreditCard",
        component:YESBankCreditCardComponent
      },

      {
        path : "standardCharteredCreditCard",
        component:StandardCharteredCreditCardComponent
      },

      {
        path : "AxisBankCreditCard",
        component:AxisBankCreditCardComponent
      },

      {
        path : "mutualFunds",
        component:MutualFundsComponent
      },

      {
        path : "ELSS",
        component:ELSSComponent
      },

      {
        path : "employeesProvidentFund",
        component:EmployeesProvidentFundComponent
      },

      {
        path : "fixedDeposit",
        component:FixedDepositComponent
      },

      {
        path : "nationalPensionScheme",
        component:NationalPensionSchemeComponent
      },

      {
        path : "nationalSavingsCertificate",
        component:NationalSavingsCertificateComponent
      },

      {
        path : "publicProvidentFund",
        component:PublicProvidentFundComponent
      },

      {
        path : "recurringDeposit",
        component:RecurringDepositComponent
      },

      {
        path : "seniorCitizenSavingScheme",
        component:SeniorCitizenSavingSchemeComponent
      },

      {
        path : "systematicInvestmentPlan",
        component:SystematicInvestmentPlanComponent
      },

      {
        path : "voluntaryProvidentFund",
        component:VoluntaryProvidentFundComponent
      },

      {
        path : "eligibilityCalculator",
        component:EligibilityCalculatorComponent
      },

      {
        path : "loan",
        component:LoanComponent
      },

      {
        path : "insurance",
        component:InsuranceComponent
      },

      {
        path : "creditCard",
        component:CreditCardComponent
      },

      {
        path : "investment",
        component:InvestmentComponent
      },

      {
        path : "calculators",
        component:CalculatorsComponent
      },

      {
        path : "emiCalculator",
        component:EmiCalculatorComponent
      },

      {
        path : "pre-paymentCalculator",
        component:PrePaymentCalculatorComponent
      },

      {
        path : "balanceTransferCalculator",
        component:BalanceTransferCalculatorComponent
      },

      {
        path : "personalEmiCalculator",
        component:PersonalEmiCalculatorComponent
      },

      {
        path : "personalPre-paymentCalculator",
        component:PersonalPrePaymentCalculatorComponent
      },

      {
        path : "personalBalanceTransferCalculator",
        component:PersonalBalanceTransferCalculatorComponent
      },

      {
        path : "businessEmiCalculator",
        component:BusinessEmiCalculatorComponent
      },

      {
        path : "businessPre-paymentCalculator",
        component:BusinessPrePaymentCalculatorComponent

      },

      {
        path : "businessBalanceTransferCalculator",
        component:BusinessBalanceTransferCalculatorComponent
      },
        // financial Calcualator

        {
          path : "incomeTaxCalculator",
          component:IncomeTaxCalculatorComponent
        },

        {
          path : "HRACalculator",
          component:HRACalculatorComponent
        },

        {
          path : "mutualFundCalculator",
          component:MutualFundCalculatorComponent

        },

        {
          path : "RDCalculator",
          component:RDCalculatorComponent
        },

        {
          path : "SIPCalculator",
          component:SIPCalculatorComponent
        },

        {
          path : "GSTCalculator",
          component:GSTCalculatorComponent
        },

        {
          path : "TDSCalculator",
          component:TDSCalculatorComponent
        },

        {
          path : "lumpsumCalculator",
          component:LumpsumCalculatorComponent
        },

        {
          path : "sukanyaSamriddhiYojanaCalculator",
          component:SukanyaSamriddhiYojanaCalculatorComponent
        },

        {
          path : "salaryCalculator",
          component:SalaryCalculatorComponent
        },
        {
          path : "FDCalculator",
          component:FDCalculatorComponent
        },
        {
          path : "PPFCalculator",
          component:PPFCalculatorComponent
        },




    ]
  },
  {
    path : "login",
    component: LoginComponent
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
