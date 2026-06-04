import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from 'src/app/models/recipe.model';

@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.scss']
})
export class RecipeCardComponent {

  @Input() recipe: Recipe;
  @Output() recipeEmitter = new EventEmitter();


  onRecipeSelected(titolo: string, difficolta: number){
    this.recipeEmitter.emit({titolo: titolo, difficolta: difficolta});
  }

}
