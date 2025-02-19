export interface IMovie {
  title: string;
  director: string;
  description: string;
  imdbRating: number;
  yearReleased: string;
  genre: string[];
  imageUrl: string;
}

export interface IBook {
  title: string;
  author: string;
  description: string;
  goodreadsRating: number;
  yearPublished: string;
  pageCount: string;
  genre: string[];
  imageUrl: string;
}

export interface IPair {
  id: number;
  movie: IMovie;
  book: IBook;
}

export type ICatalog = IPair[];

export interface CatalogContextType {
  catalog: ICatalog;
  getPair: (bookId: number) => IPair;
  setSearch: (search: string) => void;
}
