import { Injectable } from '@angular/core';
import { Recipe } from '../models/recipe.model';
import { RECIPES } from '../mocks/recipe.mock';
import { filter, from, Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  baseUrl = '/api/recipes'

  constructor(private http: HttpClient) { }

  getRecipes(): Observable<Recipe[]> {
    //return of(RECIPES);
    return this.http.get<Recipe[]>(`${this.baseUrl}/`);
  }

  getRecipeById(id:number): Observable<Recipe>{
    //return from(RECIPES).pipe(filter(ricetta => ricetta._id === id));
    return this.http.get<Recipe>(`${this.baseUrl}/${id}`);
  }

  deleteRecipeById(id:number): Observable<void>{
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }

}
