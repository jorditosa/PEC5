import { Component } from '@angular/core';
import { Article } from '../models/Article';

@Component({
  selector: 'app-article-new-template',
  templateUrl: './article-new-template.component.html',
  styleUrls: ['./article-new-template.component.css']
})
export class ArticleNewTemplateComponent {

  article: Article = new Article();

  constructor() { }

  createArticle(articleForm: any) {
    console.log(articleForm);
    if (articleForm.valid) {
      this.article = articleForm.value;
      console.log(this.article);
    } else {
      console.log('Formulario no válido');
    }
  }

}
