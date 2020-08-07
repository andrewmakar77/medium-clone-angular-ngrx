import { IAuthState } from 'src/app/models/interfaces/auth-state';
import { IFeedState } from 'src/app/models/interfaces/feed-state';
import { ITagsState } from 'src/app/models/interfaces/tags-state';

export interface IAppState {
  auth: IAuthState;
  feed: IFeedState;
  tags: ITagsState;
}
