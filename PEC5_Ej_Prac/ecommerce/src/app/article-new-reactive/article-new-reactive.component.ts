import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

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
      model: [null, [Validators.required, Validators.minLength(4)]],
      price: [0, [Validators.required, Validators.min(10000)]],
      url: [null, Validators.required],
      onSale: [false, Validators.required]
    });

  }

  onSubmit() {
    console.log('Submit');
    console.log(this.articleForm.value);
  }
  
}
