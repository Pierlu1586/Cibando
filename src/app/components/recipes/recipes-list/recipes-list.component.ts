import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/models/recipe.model';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.scss'],
})
export class RecipesListComponent implements OnInit {
  ricette: Recipe[];
  titoloRicettaCliccata: string;
  difficoltaRicettaCliccata: number;
  pathDifficulty = '../../../../assets/images/difficulty/Star_';

  constructor(private recipesService: RecipeService) {}

  ngOnInit(): void {
    this.recipesService.getRecipes().subscribe({
      next: (res) => {
        this.ricette = res;
      },
      error: (err) => {
        console.error(err);
      },
    });
  }

  onRecipeReceived(event: any) {
    if (this.titoloRicettaCliccata === event.titolo) {
      this.titoloRicettaCliccata = '';
      this.difficoltaRicettaCliccata = undefined;
    } else {
      this.titoloRicettaCliccata = event.titolo;
      this.difficoltaRicettaCliccata = event.difficolta;
    }
  }
}
