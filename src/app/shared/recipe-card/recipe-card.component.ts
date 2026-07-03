import { Component, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import {  NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { Recipe } from 'src/app/models/recipe.model';
import { RecipeService } from 'src/app/services/recipe.service';


@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.scss'],
})
export class RecipeCardComponent {
  @Input() recipe: Recipe;
  @Input() erasable: boolean;
  @Output() recipeEmitter = new EventEmitter();
  @ViewChild('modaldeleteRecipe',{static: false}) modaleDeleteRecipe: ElementRef;
  title: string;

  /*   esempioTesto = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, ipsam? Consequuntur reiciendis, inventore eveniet nesciunt quo earum amet dolorem sequi possimus doloribus fugiat qui deleniti maxime cumque officiis ex odit!"; */

  constructor( private modalService: NgbModal, private recipeService: RecipeService ){}


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

/*   openDeleteModal(id, title){
    this.title = title;
  } */

    open(id: number, title: string){
    const content = {'id':id, 'title': title};
    this.modalService.open(this.modaleDeleteRecipe, {ariaLabelledBy: 'modal registration', size: 'lg', centered:true}).result.then((res) => {
      this.recipeService.deleteRecipeById(content.id).subscribe({
        next:(res) => {console.log('Eliminazione effettuata con successo', res)},
      error:(err) => console.error(err)});
    }).catch((res) => {
      console.log("nessuna azione da eseguire");
    })
  }

}
