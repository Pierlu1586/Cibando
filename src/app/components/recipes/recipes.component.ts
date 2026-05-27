import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/models/recipe.model';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit {

  ricette: Recipe[];

  constructor(private recipesService: RecipeService){}

  ngOnInit(): void {
    this.recipesService.getRecipes().subscribe({
      next:(res) => {
        this.ricette = res
      },
      error:(err) => {
        console.error(err);
      }

    })
  }

}
