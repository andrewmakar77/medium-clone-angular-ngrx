import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticleRoutingModule } from 'src/app/modules/article/article-routing.module';
import { ArticleComponent } from 'src/app/modules/article/components/article/article.component';

@NgModule({
  declarations: [ArticleComponent],
  imports: [CommonModule, ArticleRoutingModule],
})
export class ArticleModule {}
