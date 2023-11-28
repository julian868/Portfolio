import { Component } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { EncryptorDetails } from './Project_Details/encryptorDetails';
import { QrGeneratorDetails } from './Project_Details/QrGeneratorDetails';
import { EncryptorDemoComponent } from './Project_Details/encryptor-demo/encryptor-demo.component';
import { CocktailRecipesComponent } from './Project_Details/cocktail-recipes/cocktail-recipes.component';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css'],
  providers: [DialogService]
})
export class ContainerComponent {
  constructor(
    public dialogService: DialogService,
  ) { }

  scrollTo(el: HTMLElement) {
    el.scrollIntoView();
  }
  scrollToById(id: string) {
    let el = document.getElementById(id);
    el?.scrollIntoView();
  }

  selectedProject: any;
  ref!: DynamicDialogRef;
  showDetails(project: any) {
    this.selectedProject = project;
    switch (project.id) {
      case 101:
        {
          this.ref = this.dialogService.open(CocktailRecipesComponent, {
            header: project.name,
            width: '65%',
            height: '80%',
            dismissableMask: true,                        
          })
        }
        break;
      case 102:
        {
          this.ref = this.dialogService.open(QrGeneratorDetails, {
            header: project.name,
            width: '65%',
            height: '80%'
          })
        }
        break;
      case 103:
        {
          this.ref = this.dialogService.open(EncryptorDetails, {
            header: project.name,
            width: '65%',
            height: '80%'
          })
        }
        break
      case 104:
        {
          this.ref = this.dialogService.open(EncryptorDemoComponent, {
            header: project.name,
            width: '65%'
          })
        }
        break;
    }
    
  }
  ngOnDestroy() {
    if (this.ref) {
      this.ref.close();
    }
  }
  projects = [
    { 
      id: 101, name: 'Cocktail Recipe Finder', description: 'Search and retreive popular cocktail recipes',
      image: 'cocktail.jpg'
    },
    { id: 102, name: 'QR Code Generator', description: 'Generates QR Code based on text input.',
      image: 'qrcode_cover.jpg'
    },
    {
      id: 103, name: 'Encryptor', description: 'Encrypts text and decrypts ciphertext using AES protocol.',
      image: 'encryptor_cover.jpg'
    }
  ];
}
