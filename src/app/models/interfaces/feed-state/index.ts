import { IDefaultState } from 'src/app/models/interfaces/default-state';
import { IArticle } from 'src/app/models/interfaces/article';

export interface IFeedState extends IDefaultState<IArticle[]> {}
