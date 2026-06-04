import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselComponent } from './shared/carousel/carousel.component';
import { HeaderComponent } from './shared/header/header.component';
import { RecipesComponent } from './components/recipes/recipes.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { FooterComponent } from './shared/footer/footer.component';
import { RecipeCardComponent } from './shared/recipe-card/recipe-card.component';
import { DetailComponent } from './components/recipes/detail/detail.component';
import { RecipesListComponent } from './components/recipes/recipes-list/recipes-list.component';

import { registerLocaleData } from '@angular/common';
import localeIt from '@angular/common/locales/it';

registerLocaleData(localeIt);


@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent,
    HeaderComponent,
    RecipesComponent,
    HomeComponent,
    NotFoundComponent,
    FooterComponent,
    RecipeCardComponent,
    DetailComponent,
    RecipesListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    FormsModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'it-IT' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
