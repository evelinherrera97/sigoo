import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  public product:any

  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.product = params['product'];

    });
  }

}
