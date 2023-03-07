import { Component } from '@angular/core';
import { ChildrenOutletContexts } from '@angular/router';

import { slideInAnimation } from '../animations';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css'],
  animations: [
    slideInAnimation
  ]
})
export class TemplateComponent {

  constructor(private contexts: ChildrenOutletContexts) { }

  getAnimation() {
  }
}
