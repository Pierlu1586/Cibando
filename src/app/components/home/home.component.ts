import { AfterViewInit, Component, ElementRef, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MessageService } from 'primeng/api';
import { map, take } from 'rxjs';
import { Recipe } from 'src/app/models/recipe.model';
import { RecipeService } from 'src/app/services/recipe.service';
import { UserService } from 'src/app/services/user.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, AfterViewInit{
  ricette: Recipe[];
  nome:string;
  email:string;

  @ViewChild('modalRegistrazione',{static: false}) modale: ElementRef;

  constructor(
    private recipeService: RecipeService,
    private userService: UserService,
    private messageService: MessageService,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.getlastFourRecipes();
  }

  ngAfterViewInit(): void {
  this.userService.datiUtente.pipe(take(1)).subscribe((res: any) => {
    if (!res) return;

    this.nome = res.nome;
    this.email = res.email;

    this.open(this.modale);

/*       this.messageService.add({
        severity: 'success',
        summary: 'Registrazione completata',
        detail: `Ciao ${res.nome}! La registrazione è stata effettuata con successo con la mail ${res.email}. Benvenuto su Cibando!`,
      }); */
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

  open(content: any){
    this.modalService.open(content, {ariaLabelledBy: 'modal registration', size: 'lg', centered:true}).result.then((res) => {
      console.log("azione da eseguire");
    }).catch((res) => {
      console.log("nessuna azione da eseguire");
    })
  }
}
