import { AfterContentInit, AfterViewInit, Component, Input, OnInit, Output } from '@angular/core';
import { TooltipModule } from 'primeng/tooltip';

@Component({
  selector: 'app-skill-icon',
  templateUrl: './skill-icon.component.html',
  styleUrls: ['./skill-icon.component.css']
})
export class SkillIconComponent implements OnInit {

  @Input()
  iconName: string = "";
  @Input()
  isColored?: (string | boolean);
  iconClassName?: string;
  map: Map<string, string> = new Map();
  formattedIconName?: string;

  constructor() {
    this.map.set('typescript', 'TypeScript')
    this.map.set('javascript', 'JavaScript')
    this.map.set('java', 'Java');
    this.map.set('html5', 'HTML5')
    this.map.set('css3', 'CSS');
    this.map.set('angularjs', 'Angular');
    this.map.set('react', 'React');
    this.map.set('bootstrap', 'Bootstrap');
    this.map.set('nodejs', 'Node.js');
    this.map.set('python', 'Python');
    this.map.set('bash', 'Bash');
    this.map.set('c', 'C');
    this.map.set('spring', 'Spring Boot');
    this.map.set('csharp', 'C#');
    this.map.set('mysql', 'MySQL');
    this.map.set('microsoftsqlserver','Microsoft SQL Server');
    this.map.set('mongodb', 'MongoDB');
    this.map.set('vscode','VS Code');
    this.map.set('git', 'Git');
  }

  ngOnInit(): void {
    if (this.isColored) {
      this.isColored = " colored";
    }
    else this.isColored = "";
    this.iconClassName = `devicon-${this.iconName}-plain${this.isColored}`;
    this.formattedIconName = this.map.get(this.iconName);
  }




}
