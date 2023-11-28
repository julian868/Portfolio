import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appShowSearchResults]'
})
export class ShowSearchResultsDirective {

  constructor(private template: TemplateRef<any>, private viewContainer: ViewContainerRef) { }
  @Input('appShowSearchResults') set displayView(condition: boolean) {
    if (condition) {
      this.viewContainer.clear();
      this.viewContainer.createEmbeddedView(this.template)
    } else {
      this.viewContainer.clear();
    }
  }
}
