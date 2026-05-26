import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent {
  foods = [
    {
      id: 1,
      label: "Lasagna"
    },
    {
      id: 2,
      label: "Arrosto con patate"
    },
    {
      id: 3,
      label: "Tiramisù"
    },
    {
      id: 4,
      label: "Piadina"
    },
  ];

  pathFoodsPictures = "../assets/images/image_";
}
