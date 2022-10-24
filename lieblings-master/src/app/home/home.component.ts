import { Component, OnInit } from '@angular/core';

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
  slides = [{'image': 'https://cdn0.fahasa.com/media/magentothem/banner7/pnj_840x320.jpg'}, 
  {'image': 'https://therichpost.com/wp-content/uploads/2021/02/angular-11-bootstrap-4.5-Ecommerce-Template-Free.png'},
  {'image': 'https://therichpost.com/wp-content/uploads/2020/10/Angular-10-Learning-Education-Center-Free-Template-1.png'}, 
  {'image': 'https://therichpost.com/wp-content/uploads/2020/11/Reactjs-Easy-Shop-Free-Template-with-Source-Code.png'}, 
  {'image': 'https://therichpost.com/wp-content/uploads/2021/02/angular-11-bootstrap-4.5-Ecommerce-Template-Free.png'}];
  constructor() {}

  ngOnInit(): void {}
}
