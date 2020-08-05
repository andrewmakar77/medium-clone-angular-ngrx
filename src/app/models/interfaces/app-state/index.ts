import { IAuthState } from 'src/app/models/interfaces/auth-state';
import { IFeedState } from 'src/app/models/interfaces/feed-state';

export interface IAppState {
  auth: IAuthState;
  feed: IFeedState;
}
