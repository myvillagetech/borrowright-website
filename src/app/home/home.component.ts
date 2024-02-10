import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  selectedTrendingSearch:string='';
  selectedLoanType:string = 'personal';
  selectedFeaturedBlogs:string = 'all';

  constructor(private router: Router) {}

  handleSelectedTrendingSearch(name: string){
    if(name === this.selectedTrendingSearch){
      this.selectedTrendingSearch = '';
    }else{
      this.selectedTrendingSearch = name;
    }
  }

  selectLoanType(loanType: string) {
    this.selectedLoanType = loanType;
  }

  selectFeaturedBlogs(name: string){
    this.selectedFeaturedBlogs = name;
  }

  navigateToCreditCardApplication(url: string) {
    window.location.href = url

  }

}
