export interface IUserResponse {
  bio: string | null;
  createdAt: string;
  email: string;
  id: number;
  image: string | null;
  token: string;
  updatedAt: string;
  username: string;
}

export interface IAuthResponseData {
  user: IUserResponse;
}
