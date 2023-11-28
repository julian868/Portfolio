import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { MenubarModule } from 'primeng/menubar';
import { ContainerComponent } from './container/container.component';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { CarouselModule } from 'primeng/carousel';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ImageModule } from 'primeng/image';
import { CocktailRecipesComponent } from './container/Project_Details/cocktail-recipes/cocktail-recipes.component';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { HttpClientModule } from '@angular/common/http';
import { ShowSearchResultsDirective } from './customDirectives/show-search-results.directive';

@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    ContainerComponent,
    CocktailRecipesComponent,
    ShowSearchResultsDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MenubarModule,
    CardModule,
    ButtonModule,
    CarouselModule,
    DynamicDialogModule,
    BrowserAnimationsModule,
    ImageModule,
    FormsModule,
    InputTextModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
