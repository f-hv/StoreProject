import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.scss']
})
export class StarRatingComponent implements OnInit {
  @Input() rate: any;
  countStar: any = [];
  constructor() { }
  ngOnInit(): void {
    for (let item = 1; item <= this.rate; item++) {
      this.countStar.push(item);
    }
  }
}
