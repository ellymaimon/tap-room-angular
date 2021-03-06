import { Component } from '@angular/core';
import { Keg } from './models/keg.model';
import { KEGS } from './models/mock-kegs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tap Room';

  masterKegList: Keg[] = KEGS;
  selectedKeg = null;
  newKegForm = false;

  sortAbvAsc = false;
  sortPriceAsc = false;
  sortNameAsc = false;

  showNewKegForm() {
    this.newKegForm = true;
  }

  editKeg(clickedKeg) {
    this.selectedKeg = clickedKeg;
  }
  
  finishedEditing() {
    this.selectedKeg = null;
  }

  addKeg(newKeg: Keg) {
    this.masterKegList.push(newKeg);
    this.newKegForm = false;
  }

  sellPint(keg: Keg) {
    keg.decrementPintByOne();
  }

  sellGrowler(keg: Keg) {
    keg.decrementPintByTwo();
  }
  
  sellLargeGrowler(keg: Keg) {
    keg.decrementPintByFour();
  }

  sortByAbv() {
    if (this.sortAbvAsc === false) {
      this.sortAbvAsc = true;
      this.masterKegList.sort(function(a, b){return a.abv - b.abv})
    }
    else {
      this.sortAbvAsc = false;
      this.masterKegList.sort(function(a, b){return b.abv - a.abv})
    }
  }

  sortByPrice() {
    if (this.sortPriceAsc === false) {
      this.sortPriceAsc = true;
      this.masterKegList.sort(function(a, b){return a.price - b.price})
    }
    else {
      this.sortPriceAsc = false;
      this.masterKegList.sort(function(a, b){return b.price - a.price})
    }
  }

  sortByBeerName() {
    if (this.sortNameAsc === false) {
      this.sortNameAsc = true;
      this.masterKegList.sort();
    }
    else {
      this.sortNameAsc = false;
      this.masterKegList.sort().reverse();
    }
  }
}
