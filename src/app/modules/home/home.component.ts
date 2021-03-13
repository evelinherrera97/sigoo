import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public product = [
    {
      teams: 'team1',
      guide: 10,
      guideUnit: 120,
      readGuide: 10
      
    },
    {
      teams: 'team2',
      guide: 10,
      guideUnit: 20,
      readGuide: 40

    },
    {
      teams: 'team3',
      guide: 60,
      guideUnit: 100,
      readGuide: 120

    },
    {
      teams: 'team4',
      guide: 4350,
      guideUnit: 200,
      readGuide: 12320

    },
    {
      teams: 'team5',
      guide: 140,
      guideUnit: 14230,
      readGuide: 12340
    },
    {
      teams: 'team6',
      guide: 10,
      guideUnit: 12340,
      readGuide: 10
    },
    {
      teams: 'team7',
      guide: 10,
      guideUnit: 42310,
      readGuide: 10
      
    },
    {
      teams: 'team8',
      guide: 10,
      guideUnit: 10,
      readGuide: 10
    },
    {
      teams: 'team9',
      guide: 10,
      guideUnit: 10,
      readGuide: 10
    }
  ]

  public index: any;
  public show = false;
  public total1 = 0;
  public total2 = 0;
  public total3 = 0;


  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    this.product.forEach(element => {
      this.total1 += +element.guide
      this.total2 += +element.guideUnit
      this.total3 += +element.readGuide
    });
  }

  showDetail(e: any) {
    this.show = true;
    this.index = e;
    console.log(
      this.product[this.index]
    )

  }
  hideDetails() {
    console.log('dsfgfhf')
    this.show = false
  }

  goDetail() {
    this.router.navigate(['detail', {'produc': this.product[this.index]}])
  }

  

}
