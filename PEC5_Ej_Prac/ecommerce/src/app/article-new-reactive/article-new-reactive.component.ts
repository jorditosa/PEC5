import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ValidatorFn, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-article-new-reactive',
  templateUrl: './article-new-reactive.component.html',
  styleUrls: ['./article-new-reactive.component.css']
})
export class ArticleNewReactiveComponent {

  public articleForm!: FormGroup;

  constructor(private fb: FormBuilder) { 
    this.createForm();
  }

  createForm() {
    this.articleForm = this.fb.group({
      model: [null, [Validators.required, this.NameArticleValidator()]],
      price: [0, [Validators.required, Validators.min(10000)]],
      url: [null, Validators.required],
      onSale: [false, Validators.required]
    });

  }

  NameArticleValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const forbiddenNames = ['Prueba', 'Test', 'Mock', 'Fake'];
      const articleName = control.value;
  
      if (forbiddenNames.includes(articleName)) {
        return { forbiddenName: true };
      }
  
      return null;
    };
  }

  onSubmit() {
    console.log('Submit');
    console.log(this.articleForm.value);
  }
  
}
