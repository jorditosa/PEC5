import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  
  activeComponent: string = 'article-list';

  articleListPage() {
    this.activeComponent = 'article-list';
  }

  newTemplateFormPage() {
    this.activeComponent = 'article-new-template';
  }

  newReactiveFormPage() {
    this.activeComponent = 'article-new-reactive';
  }
}
