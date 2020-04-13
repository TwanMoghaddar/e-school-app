import {Component, OnInit} from '@angular/core';
import {Homepage} from './Shared/homepage.model';

@Component({
  selector: 'app-page-homepage',
  templateUrl: './page-homepage.component.html',
  styleUrls: ['./page-homepage.component.css']
})
export class PageHomepageComponent implements OnInit {
  name: string;
  functie: string;
  functies: string[];
  itemsVolgensModel: Homepage[];
  index = 1;
  dummyItems = [];


  constructor() {
  }

  ngOnInit() {
    this.functie = 'Teachers';
    this.functies = ['Teachers', 'Students', 'Developers', 'Creators'];
    this.itemsVolgensModel = [
      new Homepage(1, 'Students'),
      new Homepage(2, 'Teachers'),
      new Homepage(3, 'Developers'),
      new Homepage(4, 'Creators'),
    ];

    setInterval(() => {
      if (this.index < this.functies.length) {
        this.functie = this.functies[this.index];
        this.index++;
        if (this.index === 4) {
          this.index = 1;
        }
      }
    }, 2000);
  }
}
