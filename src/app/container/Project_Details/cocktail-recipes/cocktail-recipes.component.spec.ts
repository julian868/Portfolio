import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CocktailRecipesComponent } from './cocktail-recipes.component';

describe('CocktailRecipesComponent', () => {
  let component: CocktailRecipesComponent;
  let fixture: ComponentFixture<CocktailRecipesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CocktailRecipesComponent]
    });
    fixture = TestBed.createComponent(CocktailRecipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
