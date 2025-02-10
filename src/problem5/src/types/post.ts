export interface PostInput {
  title: string;
  content: string;
  authorEmail: string;
}

export interface PostQuery {
  searchString?: string;
  skip?: number;
  take?: number;
  orderBy?: 'asc' | 'desc';
}
