import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { LifeInsuranceComponent } from './insurance/life-insurance/life-insurance.component';
import { GeneralInsurancePlansComponent } from './insurance/general-insurance-plans/general-insurance-plans.component';
import { HomeLoanComponent } from './insurance/loans/home-loan/home-loan.component';
import { MainComponent } from './main/main.component';
import { BusinessLoanComponent } from './insurance/loans/business-loan/business-loan.component';
import { PersonalLoanComponent } from './insurance/loans/personal-loan/personal-loan.component';
import { LoanAgainstPropertyComponent } from './insurance/loans/loan-against-property/loan-against-property.component';
import { IDFCBankCreditCardComponent } from './creditCard/idfcbank-credit-card/idfcbank-credit-card.component';
import { YESBankCreditCardComponent } from './creditCard/yesbank-credit-card/yesbank-credit-card.component';
import { StandardCharteredCreditCardComponent } from './creditCard/standard-chartered-credit-card/standard-chartered-credit-card.component';
import { AxisBankCreditCardComponent } from './creditCard/axis-bank-credit-card/axis-bank-credit-card.component';
import { PublicProvidentFundComponent } from './investment/public-provident-fund/public-provident-fund.component';
import { FixedDepositComponent } from './investment/fixed-deposit/fixed-deposit.component';
import { SystematicInvestmentPlanComponent } from './investment/systematic-investment-plan/systematic-investment-plan.component';
import { RecurringDepositComponent } from './investment/recurring-deposit/recurring-deposit.component';
import { EmployeesProvidentFundComponent } from './investment/employees-provident-fund/employees-provident-fund.component';
import { VoluntaryProvidentFundComponent } from './investment/voluntary-provident-fund/voluntary-provident-fund.component';
import { ELSSComponent } from './investment/elss/elss.component';
import { NationalPensionSchemeComponent } from './investment/national-pension-scheme/national-pension-scheme.component';
import { NationalSavingsCertificateComponent } from './investment/national-savings-certificate/national-savings-certificate.component';
import { SeniorCitizenSavingSchemeComponent } from './investment/senior-citizen-saving-scheme/senior-citizen-saving-scheme.component';
import { MutualFundsComponent } from './investment/mutual-funds/mutual-funds.component';
import { EligibilityCalculatorComponent } from './eligibilityCalculator/eligibility-calculator/eligibility-calculator.component';
import { LoanComponent } from './insurance/loans/loan/loan.component';
import { InsuranceComponent } from './insurance/insurance/insurance.component';
import { CreditCardComponent } from './creditCard/credit-card/credit-card.component';
import { InvestmentComponent } from './investment/investment/investment.component';
import { CalculatorsComponent } from './calculators/calculators/calculators.component';
import { EmiCalculatorComponent } from './calculators/HomeLoanCalculator/emi-calculator/emi-calculator.component';
import { PrePaymentCalculatorComponent } from './calculators/HomeLoanCalculator/pre-payment-calculator/pre-payment-calculator.component';
import { BalanceTransferCalculatorComponent } from './calculators/HomeLoanCalculator/balance-transfer-calculator/balance-transfer-calculator.component';
import { IncomeTaxCalculatorComponent } from './calculators/financialCalculator/income-tax-calculator/income-tax-calculator.component';
import { HRACalculatorComponent } from './calculators/financialCalculator/hracalculator/hracalculator.component';
import { RDCalculatorComponent } from './calculators/financialCalculator/rdcalculator/rdcalculator.component';
import { MutualFundCalculatorComponent } from './calculators/financialCalculator/mutual-fund-calculator/mutual-fund-calculator.component';
import { SIPCalculatorComponent } from './calculators/financialCalculator/sipcalculator/sipcalculator.component';
import { LumpsumCalculatorComponent } from './calculators/financialCalculator/lumpsum-calculator/lumpsum-calculator.component';
import { GSTCalculatorComponent } from './calculators/financialCalculator/gstcalculator/gstcalculator.component';
import { TDSCalculatorComponent } from './calculators/financialCalculator/tdscalculator/tdscalculator.component';
import { FDCalculatorComponent } from './calculators/financialCalculator/fdcalculator/fdcalculator.component';
import { PPFCalculatorComponent } from './calculators/financialCalculator/ppfcalculator/ppfcalculator.component';
import { SukanyaSamriddhiYojanaCalculatorComponent } from './calculators/financialCalculator/sukanya-samriddhi-yojana-calculator/sukanya-samriddhi-yojana-calculator.component';
import { SalaryCalculatorComponent } from './calculators/financialCalculator/salary-calculator/salary-calculator.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AmountToWordsPipe } from './shared/pipes/amount-to-words.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    LifeInsuranceComponent,
    GeneralInsurancePlansComponent,
    HomeLoanComponent,
    MainComponent,
    BusinessLoanComponent,
    PersonalLoanComponent,
    LoanAgainstPropertyComponent,
    IDFCBankCreditCardComponent,
    YESBankCreditCardComponent,
    StandardCharteredCreditCardComponent,
    AxisBankCreditCardComponent,
    PublicProvidentFundComponent,
    FixedDepositComponent,
    SystematicInvestmentPlanComponent,
    RecurringDepositComponent,
    EmployeesProvidentFundComponent,
    VoluntaryProvidentFundComponent,
    ELSSComponent,
    NationalPensionSchemeComponent,
    NationalSavingsCertificateComponent,
    SeniorCitizenSavingSchemeComponent,
    MutualFundsComponent,
    EligibilityCalculatorComponent,
    LoanComponent,
    InsuranceComponent,
    CreditCardComponent,
    InvestmentComponent,
    CalculatorsComponent,
    EmiCalculatorComponent,
    PrePaymentCalculatorComponent,
    BalanceTransferCalculatorComponent,
    IncomeTaxCalculatorComponent,
    HRACalculatorComponent,
    RDCalculatorComponent,
    MutualFundCalculatorComponent,
    SIPCalculatorComponent,
    LumpsumCalculatorComponent,
    GSTCalculatorComponent,
    TDSCalculatorComponent,
    FDCalculatorComponent,
    PPFCalculatorComponent,
    SukanyaSamriddhiYojanaCalculatorComponent,
    SalaryCalculatorComponent,
    AmountToWordsPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
