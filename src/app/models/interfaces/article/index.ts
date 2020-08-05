import { TFeedAuthor } from 'src/app/models/types/feed-author';

export interface IArticle {
  author: TFeedAuthor;
  body: string;
  createdAt: string;
  description: string;
  favorited: boolean;
  favoritesCount: number;
  slug: string;
  tagList: string[];
  title: string;
  updatedAt: string;
}
