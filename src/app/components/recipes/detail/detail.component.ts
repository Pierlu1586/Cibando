import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/models/recipe.model';
import { RecipeService } from 'src/app/services/recipe.service';
import { ActivatedRoute, Router } from '@angular/router'; //ActivatedRoute: per prendere le info dalla url, Router: ogni volta che voglio collegarmi ad una pagina senza usare l'interazione di un utente


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  ricetta: Recipe;
  pathDifficulty = "../../../../assets/images/difficulty/Star_";

  constructor(
    private recipeService: RecipeService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ){}

  ngOnInit(): void {
   this.onGetRecipe2();
  }

  // Primo metodo di recupero parametri da url tramite snapshot
  onGetRecipe(): void {
    const id = Number(this.activatedRoute.snapshot.paramMap.get('_id')); //migliore se bisogna recuperare un solo parametro
    this.recipeService.getRecipeById(id).subscribe({
      next: (res) => {
        this.ricetta = res;
        console.log(this.ricetta);
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

  //Metodo alternativo tramite params
  onGetRecipe2(): void {
    this.activatedRoute.params.subscribe((urlParams) => {//per recuperare più parametri
      const id = urlParams['_id'];
      const idNumerico = Number(id);

      this.recipeService.getRecipeById(idNumerico).subscribe(res => this.ricetta = res);
    })
  }
}
