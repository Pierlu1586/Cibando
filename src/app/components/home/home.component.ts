import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { map, take } from 'rxjs';
import { Recipe } from 'src/app/models/recipe.model';
import { RecipeService } from 'src/app/services/recipe.service';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  ricette: Recipe[];

  constructor(
    private recipeService: RecipeService,
    private userService: UserService,
    private messageService: MessageService,
  ) {}

  ngOnInit(): void {
    this.getlastFourRecipes();
    this.userService.datiUtente.pipe(take(1)).subscribe((res: any) => {
      if (!res) return;
      this.messageService.add({
        severity: 'success',
        summary: 'Registrazione completata',
        detail: `Ciao ${res.nome}! La registrazione è stata effettuata con successo con la mail ${res.email}. Benvenuto su Cibando!`,
      });
    });
  }

  getlastFourRecipes() {
    this.recipeService
      .getRecipes()
      .pipe(
        map((recipes) =>
          [...recipes]
            .sort(
              (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
            )
            .slice(0, 4),
        ),
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
