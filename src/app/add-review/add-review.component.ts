import { Component, OnInit } from '@angular/core';
import { ReviewService } from '../review.service';
import { Review } from '../review';
import { Location } from '@angular/common';

@Component({
  selector: 'app-add-review',
  templateUrl: './add-review.component.html',
  styleUrls: ['./add-review.component.css']
})
export class AddReviewComponent implements OnInit {

  reviews: Review[];

  constructor(
    private location: Location,
    private reviewService: ReviewService
  ) { }

  ngOnInit() {
    this.reviewService.getReviewList().subscribe(g => this.reviews = g);
  }

  goReload(): void {
    location.reload();
  }

  add(n: string, c: string, h: string): void {
    n = n.trim();
    c = c.trim();
    h = h.trim();
    if (!n || !c || !h) {
      return;
    } else {
      this.reviewService.addReview({name: n, comment: c, hor: h} as Review).subscribe(() => this.goReload());
    }
  }

}
