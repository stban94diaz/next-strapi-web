export interface Result {
  data: VideoGame[];
  meta: Meta;
}

export interface VideoGame {
  id:          number;
  documentId:  string;
  title:       string;
  launch:      Date;
  description: string;
  slug:        string;
  createdAt:   Date;
  updatedAt:   Date;
  publishedAt: Date;
  locale:      null;
  platforms:   Platform[];
  cover:       Cover;
}

export interface Cover {
  id:         number;
  documentId: string;
  url:        string;
}

export interface Platform {
  id:         number;
  documentId: string;
  name:       string;
}

export interface Meta {
  pagination: Pagination;
}

export interface Pagination {
  page:      number;
  pageSize:  number;
  pageCount: number;
  total:     number;
}
