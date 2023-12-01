import { Component, Input, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs';


@Component({
  selector: 'app-cocktail-recipes',
  templateUrl: './cocktail-recipes.component.html',
  styleUrls: ['./cocktail-recipes.component.css']
})
export class CocktailRecipesComponent {

  showSearchResults: boolean = false;
  showRecipe: boolean = false;
  searchResults: any;
  searchInput!: string;
  ingredients: string[] = [];
  measurements: Map<string, string> = new Map();
  instructions!: string;
  ingredientImages: Map<string, any> = new Map();
  invalidSearch: boolean = false;

  constructor(private http: HttpClient) { }

  async searchCocktails() {
    if (this.searchInput != "") {
      this.http.get<any>(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${this.searchInput}`)
        .subscribe((res) => {
          this.searchResults = res;
          if (this.searchResults.drinks == null) {
            this.invalidSearch = true;
            this.showSearchResults = false;
            this.showRecipe = false;
          } else {
            this.showSearchResults = true;
            this.showRecipe = false;
            this.invalidSearch = false;
          }
        })
    } else {
      this.invalidSearch = true;
      this.showSearchResults = false;
      this.showRecipe = false;
    }

  }
  async viewRecipe(cocktail: any) {
    this.instructions = cocktail.cocktail.strInstructions;
    this.showRecipe = true;
    this.ingredients = [];
    this.measurements.clear();
    this.ingredientImages.clear();
    for (let i = 1; i <= 15; i++) {
      let ingredientKey = "strIngredient";
      let measureKey = "strMeasure";
      ingredientKey = ingredientKey + i.toString();
      measureKey = measureKey + i.toString();
      if (cocktail.cocktail[ingredientKey] === null) {
        break;
      }
      this.ingredients.push(cocktail.cocktail[ingredientKey]);
      this.measurements.set(cocktail.cocktail[ingredientKey], cocktail.cocktail[measureKey]);
      this.http.get(`https://www.thecocktaildb.com/images/ingredients/${cocktail.cocktail[ingredientKey]}-Small.png`, { responseType: "blob", observe: "body" })
        .pipe(
          switchMap(blob => this.convertBlobToBase64(blob))
        )
        .subscribe(base64ImageUrl => this.ingredientImages.set(cocktail.cocktail[ingredientKey], base64ImageUrl))
    }
  }
  closeResults() {
    this.showSearchResults = false;
    this.showRecipe = false;
    this.ingredients = [];
    this.measurements.clear();
    this.ingredientImages.clear();
    this.searchInput = "";
  }

  convertBlobToBase64(blob: Blob) {
    return Observable.create((observer: { next: (arg0: any) => void; complete: () => void; }) => {
      const reader = new FileReader();
      const binaryString = reader.readAsDataURL(blob);
      reader.onload = (event: any) => {
        observer.next(event.target.result);
        observer.complete();
      };

      reader.onerror = (event: any) => {
        console.log("File could not be read: " + event.target.error.code);
        observer.next(event.target.error.code);
        observer.complete();
      };
    });
  }
}
