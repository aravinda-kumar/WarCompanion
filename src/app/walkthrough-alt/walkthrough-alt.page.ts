import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-walkthrough-alt',
  templateUrl: './walkthrough-alt.page.html',
  styleUrls: ['./walkthrough-alt.page.scss'],
})
export class WalkthroughAltPage implements OnInit {
  slideOpts = {
    autoplay: false
  };

  constructor() { }

  ngOnInit() {
  }

}
