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
import { EncryptorComponent } from './container/Project_Details/encryptor/encryptor.component';
import { TabViewModule } from 'primeng/tabview';
import { RadioButtonModule } from 'primeng/radiobutton';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { FieldsetModule } from 'primeng/fieldset';
import { SkillIconComponent } from './container/skill-icon/skill-icon.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    ContainerComponent,
    CocktailRecipesComponent,
    ShowSearchResultsDirective,
    EncryptorComponent,
    SkillIconComponent
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
    HttpClientModule,
    TabViewModule,
    RadioButtonModule,
    InputTextareaModule,
    FieldsetModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
