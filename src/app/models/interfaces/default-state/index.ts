export interface IDefaultState<T> {
  loaded: boolean | null;
  loading: boolean | null;
  error: boolean | null;
  errorMessages: any[];
  data: T;
}
