import { IBackendErrorMap } from '../backend-error';

export interface IDefaultState<T> {
  loaded: boolean | null;
  loading: boolean | null;
  error: boolean | null;
  errorMessages: IBackendErrorMap;
  data: T;
}
