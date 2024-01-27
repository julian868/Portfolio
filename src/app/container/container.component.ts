import { AfterViewInit, Component, OnInit } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { QrGeneratorDetails } from './Project_Details/QrGeneratorDetails';
import { EncryptorComponent } from './Project_Details/encryptor/encryptor.component';
import { CocktailRecipesComponent } from './Project_Details/cocktail-recipes/cocktail-recipes.component';
import { ActivatedRoute, Router } from '@angular/router';
import { ViewportScroller } from '@angular/common';



@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css' ],
  providers: [DialogService]
})
export class ContainerComponent implements AfterViewInit, OnInit {
  selectedProjectFragment: any;
  constructor(public dialogService: DialogService, private route: ActivatedRoute, private viewportScroller:ViewportScroller) {
    
   }
  selectedPage: number = 0;

  ngOnInit(): void {
    window.onhashchange = function () {
      window.location.reload();
    };
    if (window.location.hash.substring(1)) {
      this.viewportScroller.setHistoryScrollRestoration('manual')
    }
  }

  ngAfterViewInit(): void {
    let projectNavList: [number,string][] = this.projects.map(a => [a.id, a.name.replace(/\s/g, "")]);
    this.selectedProjectFragment = window.location.hash.substring(1);
    if (this.selectedProjectFragment != null && projectNavList.map(a => a[1]).includes(this.selectedProjectFragment)) {
      let selectedProjectNav:[number,string][] = projectNavList.filter(a => a[1] == this.selectedProjectFragment);
      let scrollTimeout: any;
      let this1 = this;

      setTimeout(() => {
        this.scrollToById('portfolio');
      }, 500);
    
      let listner = addEventListener('scroll', function (e) {
        clearTimeout(scrollTimeout);
        let this2 = this1;
        scrollTimeout = setTimeout(function () {
          this2.openProjectbyFragment(selectedProjectNav)
        }, 1000);
      }, {once:true});
    }
  }

  openInNewTab(url: string) {
    window.open(url);
  }
  
  openProjectbyFragment(selectedProjectNav:[number,string][]) {
    this.selectedPage = selectedProjectNav[0][0] - 101;
    setTimeout(() => {
      this.showDetails(this.projects.filter(a => { return a.id == selectedProjectNav[0][0] })[0])
    }, 900);
  }

  scrollTo(el: HTMLElement) {
    el.scrollIntoView();
  }
  scrollToById(id: string) {
    let el = document.getElementById(id);
    el?.scrollIntoView();
  }

  ref!: DynamicDialogRef;
  showDetails(project: any) {
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
          this.ref = this.dialogService.open(EncryptorComponent, {
            header: project.name,
            width: '65%',
            height: '80%'
          })
        }
        break;
      case 103:
        {
          this.ref = this.dialogService.open(QrGeneratorDetails, {
            header: project.name,
            width: '65%',
            height: '80%'
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
    {
      id: 102, name: 'Encryptor', description: 'Encrypts text and decrypts ciphertext using AES protocol.',
      image: 'encryptor_cover.jpg'
    },
    {
      id: 103, name: 'QR Code Generator', description: 'Generates QR Code based on text input.',
      image: 'qrcode_cover.jpg'
    }
  ];

}
