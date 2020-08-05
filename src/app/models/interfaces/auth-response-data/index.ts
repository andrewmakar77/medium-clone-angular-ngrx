export interface IUserResponse {
  bio: string | null;
  createdAt: string;
  email: string;
  id: number;
  image: string | null;
  token: string;
  updatedAt: string;
  username: string;
  following?: boolean;
}

export interface IAuthResponseData {
  user: IUserResponse;
}
