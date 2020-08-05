import { IUserResponse } from '../../interfaces';

export type TFeedAuthor = Pick<
  IUserResponse,
  'bio' | 'image' | 'username' | 'following'
>;
