import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-recipe',
  templateUrl: './create-recipe.component.html',
  styleUrls: ['./create-recipe.component.scss']
})
export class CreateRecipeComponent {

  form = new FormGroup({
    name: new FormControl('',Validators.required),
    type: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    difficulty: new FormControl('', [Validators.required,Validators.min(0), Validators.max(5)]),
    image: new FormControl('')
  });

  onSubmit(){
    console.log('Ricetta form: ',this.form.value);
  }



}
