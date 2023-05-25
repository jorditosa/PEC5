import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-article-new-template',
  templateUrl: './article-new-template.component.html',
  styleUrls: ['./article-new-template.component.css']
})
export class ArticleNewTemplateComponent {

  article: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.article = this.formBuilder.group({
      model: '',
      price: 0,
      url: '',
      onSale: false
  });
 }

}
