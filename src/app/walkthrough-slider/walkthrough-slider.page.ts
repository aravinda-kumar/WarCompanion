import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-walkthrough-slider',
  templateUrl: './walkthrough-slider.page.html',
  styleUrls: ['./walkthrough-slider.page.scss'],
})
export class WalkthroughSliderPage implements OnInit {
  slideOpts = {
    autoplay: true
  };

  constructor(private router: Router) { }

  ngOnInit() {
  }

  public skip(): void {
    this.router.navigate(['/login']);
  }
}
