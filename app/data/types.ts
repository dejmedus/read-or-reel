export interface IMovie {
  id: number;
  title: string;
  director: string;
  description: string;
  imdbRating: number;
  yearReleased: string;
  genre: string[];
  imageUrl: string;
}

export interface IBook {
  id: number;
  title: string;
  author: string;
  description: string;
  goodreadsRating: number;
  yearPublished: string;
  pageCount: string;
  genre: string[];
  imageUrl: string;
}

export interface ICatalog {
  movies: IMovie[];
  books: IBook[];
}

export interface CatalogContextType {
  catalog: ICatalog;
  getBook: (bookId: number) => IBook;
  getMovie: (movieId: number) => IMovie;
}
