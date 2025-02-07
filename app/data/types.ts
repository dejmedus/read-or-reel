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
  genre: string[];
  imageUrl: string;
}

export interface ICatalog {
  movies: IMovie[];
  books: IBook[];
}

export interface CatalogContextType {
  catalog: ICatalog;
  getBook: (bookName: string) => IBook;
  getMovie: (movieName: string) => IMovie;
}
