import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'll-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  particlesOptions = {
    particles: {
      color: {
        value: ['#ffffff', '#ffffff']
      },
      size: {
        value: 1
      },
      lineLinked: {
        enable: true,
        color: 'random'
      },
      move: {
        enable: true,
        speed: 1.5
      }
    }
  };
  slides = [{'image': 'https://web.hvnet.vn/uploads/img/25/imagesoptions/large/banner-4-22092020083633-21112020020359-min-31032022024526.webp?v=637'}, 
  {'image': 'https://web.hvnet.vn/uploads/img/25/imagesoptions/large/nguyen-phong-banner-4-06072019032626-14042021110314-min-31032022024718.webp?v=637'},
  {'image': 'https://web.hvnet.vn/uploads/img/25/imagesoptions/large/dinh-gia-3-cuon-alphabooks-17022021015056-31032022024924.webp?v=637'}, 
  {'image': 'https://web.hvnet.vn/uploads/img/25/imagesoptions/large/banner-5-cuon-song-gia-tri-3-21122019105402-31032022025053.webp?v=637'}, 
];
  constructor() {}

  ngOnInit(): void {}
}
