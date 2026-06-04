import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { Recipe } from 'src/app/models/recipe.model';
import { RecipeService } from 'src/app/services/recipe.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  ricette: Recipe[];

  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {
    this.getlastFourRecipes();
  }

  getlastFourRecipes() {
    this.recipeService
      .getRecipes()
      .pipe(
        map((recipes) => [...recipes].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).slice(0,4)),
      )
      .subscribe({
        next: (res) => {
          this.ricette = res;
        },
        error: (err) => {
          console.log('Error: ', err);
        },
      });
  }

}
