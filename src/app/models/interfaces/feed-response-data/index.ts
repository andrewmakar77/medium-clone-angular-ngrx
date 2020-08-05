import { IArticle } from 'src/app/models/interfaces/article/index';

export interface IFeedResponseData {
  articles: IArticle[];
  articlesCount: number;
}
