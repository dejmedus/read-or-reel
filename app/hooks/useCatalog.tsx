import { createContext, useContext, useEffect, useState } from "react";

import { CatalogContextType, ICatalog, IBook, IMovie } from "../data/types";

const defaultContext: CatalogContextType = {
  catalog: {
    books: [],
    movies: [],
  },
  getBook: () => ({} as IBook),
  getMovie: () => ({} as IMovie),
};

const CatalogContext = createContext<CatalogContextType>(defaultContext);

export function CatalogProvider({ children }: { children: React.ReactNode }) {
  const [catalog, setCatalog] = useState<ICatalog>(mockData);

  useEffect(() => {
    // get real data from json
    // parse it into a JS object
    // set catalog
    setCatalog(mockData);
  }, []);

  const getBook = (bookId: number) =>
    catalog.books.filter((book) => book.id == bookId)[0];

  const getMovie = (movieId: number) =>
    catalog.movies.filter((movie) => movie.id == movieId)[0];

  return (
    <CatalogContext.Provider value={{ catalog, getBook, getMovie }}>
      {children}
    </CatalogContext.Provider>
  );
}

export default function useCatalog() {
  return useContext(CatalogContext);
}

const mockData = {
  movies: [
    {
      id: 1,
      title: "twilight",
      director: "",
      description: "",
      imdbRating: 5.0,
      yearReleased: "",
      genre: [],
      imageUrl: "",
    },
  ],
  books: [
    {
      id: 1,
      title: "twilight",
      author: "",
      description: "",
      goodreadsRating: 5.0,
      yearPublished: "",
      pageCount: "",
      genre: [],
      imageUrl: "",
    },
  ],
};
