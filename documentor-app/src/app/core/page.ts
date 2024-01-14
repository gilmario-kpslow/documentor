export interface Page<T> {
  content: T[];
  pageIndex: number;
  totalElements: number;
}
