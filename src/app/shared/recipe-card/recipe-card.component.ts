import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from 'src/app/models/recipe.model';

@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.scss'],
})
export class RecipeCardComponent {
  @Input() recipe: Recipe;
  @Output() recipeEmitter = new EventEmitter();

/*   esempioTesto = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, ipsam? Consequuntur reiciendis, inventore eveniet nesciunt quo earum amet dolorem sequi possimus doloribus fugiat qui deleniti maxime cumque officiis ex odit!"; */

  onRecipeSelected(titolo: string, difficolta: number) {
    const value = { titolo: titolo, difficolta: difficolta };
    this.recipeEmitter.emit(value);
  }

/*   accorciaDescrizione(description: string): number{
    const lunghezzaMassima = 195;
    if(description.length <= lunghezzaMassima){
      return lunghezzaMassima;
    } else {
      let ultimaPosizioneSpazio = description.indexOf(' ', lunghezzaMassima);
      return ultimaPosizioneSpazio;
    }
  } */

}
