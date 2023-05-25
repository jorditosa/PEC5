import { Component } from '@angular/core';
import { ArticlesService } from '../services/articles.service';
import { Article } from '../models/Article';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent {

  articles: Article[] = [];

  constructor(private articleService:ArticlesService) { }

  ngOnInit(): void {
    this.articles = this.articleService.getAll();
  }

}
