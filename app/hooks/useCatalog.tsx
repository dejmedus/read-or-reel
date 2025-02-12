import { createContext, useContext, useEffect, useState } from "react";
import { CatalogContextType, ICatalog, IBook, IMovie } from "../data/types";
import databaseJSON from "../data/data.json"

// Context is like a storage locker where we store data we want multiple components to access
// provides the shape of the context and default values. CatalogContext will actually fill
// the context with the data
const defaultContext: CatalogContextType = {
  catalog: {
    books: [],
    movies: [],
  },
// placeholder funtions to show the context what type of data to expect 
  getBook: () => ({} as IBook),
  getMovie: () => ({} as IMovie),
};

const CatalogContext = createContext<CatalogContextType>(defaultContext);

// Provider component is a wrapper, makes catalog data vailable to all child components
export function CatalogProvider({ children }: { children: React.ReactNode }) {
// state variable and state management
  const [catalog, setCatalog] = useState<ICatalog>(defaultContext.catalog);

// runs when the component mounts, runs only once, loads date fr JSON
  useEffect(() => {
    setCatalog(databaseJSON);
  }, []);
// utility functions available to any component using the context
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
// custom React hook to access context. Any component can call useCatalog()
export default function useCatalog() {
  return useContext(CatalogContext);
}

// TODO delete mock data before we hit production
// const mockData = {
//   movies: [
//     {
//       id: 1,
//       title: "twilight",
//       director: "",
//       description: "",
//       imdbRating: 5.0,
//       yearReleased: "",
//       genre: [],
//       imageUrl: "",
//     },
//   ],
//   books: [
//     {
//       "id": 1,
//       "title": "The Last Unicorn",
//       "author": "Peter S. Beagle",
//       "description": "The Last Unicorn is a fantasy novel by American author Peter S. Beagle and published in 1968, by Viking Press in the U.S. and The Bodley Head in the U.K. It follows the tale of a unicorn, who believes she is the last of her kind in the world and undertakes a quest to discover what has happened to the other unicorns.",
//       "goodreadsRating": 4.2,
//       "yearPublished": "1968",
//       "pageCount": "288",
//       "genre": ["fantasy"],
//       "imageUrl": "/assets/images/the_last_unicorn_book.jpg"
//     },
//     {
//       "id": 2,
//       "title": "Ender's Game",
//       "author": "Orson Scott Card",
//       "description": "Ender's Game is a 1985 military science fiction novel by American author Orson Scott Card. Set at an unspecified date in Earth's future, the novel presents an imperiled humankind after two conflicts with an insectoid alien species they dub 'the buggers' ",
//       "goodreadsRating": 4.3,
//       "yearPublished": "1985",
//       "pageCount": "324",
//       "genre": ["science-fiction"],
//       "imageUrl": "/assets/images/enders_game_book.jpeg"
//     },
//     {
//       "id": 3,
//       "title": "The Fellowship of the Ring",
//       "author": "J.R.R. Tolkien",
//       "description": "the first of three volumes of the epic novel[1] The Lord of the Rings by the English author J. R. R. Tolkien; it is followed by The Two Towers and The Return of the King. The action takes place in the fictional universe of Middle-earth.",
//       "goodreadsRating": 4.4,
//       "yearPublished": "1954",
//       "pageCount": "464",
//       "genre": ["fantasy"],
//       "imageUrl": "/assets/images/the_fellowship_of_the_ring_book.jpeg"
//     },
//     {
//       "id": 4,
//       "title": "The Hunger Games",
//       "author": "Suzanne Collins",
//       "description": "The Hunger Games follows 16-year-old Katniss Everdeen, a girl from District 12 who volunteers for the 74th Hunger Games in place of her younger sister Primrose Everdeen.",
//       "goodreadsRating": 4.3,
//       "yearPublished": "2008",
//       "pageCount": "374",
//       "genre": ["science-fiction", "dystopian", "young-adult"],
//       "imageUrl": "/assets/images/the_hunger_games_book.jpg"
//     },
//     {
//       "id": 5,
//       "title": "Twilight",
//       "author": "Stephenie Meyer",
//       "description": "Twilight introduces seventeen-year-old Isabella 'Bella' Swan, who moves from Phoenix, Arizona, to Forks, Washington. She is endangered after falling in love with Edward Cullen, a 103-year-old vampire frozen in his 17-year-old body.",
//       "goodreadsRating": 3.6,
//       "yearPublished": "2005",
//       "pageCount": "544",
//       "genre": ["fantasy", "young-adult", "romance"],
//       "imageUrl": "/assets/images/twilight_book.jpg"
//     }
//   ],
// };
