import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cibando';

  foods=[
    {
      id:1,
      label:"Lasagna"
    },
    {
      id:2,
      label:"Arrosto con patate"
    },
     {
      id:3,
      label:"Tiramisù"
    },
      {
      id:4,
      label:"Piadina"
    },
  ];

  pathFoodsPictures="../assets/images/image_";

}
