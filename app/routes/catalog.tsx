import { useLoaderData } from "@remix-run/react";

import BookCard from "~/components/book-card";
import MovieCard from "~/components/movie-card";

import useCatalog from "../hooks/useCatalog";

export async function loader({ request }) {
  const url = new URL(request.url);
  const type = url.searchParams.get("type") || "books";
  return { booksOrMovies: type };
}

export default function Catalog() {
  const { booksOrMovies } = useLoaderData<typeof loader>();
  const { catalog } = useCatalog();

  // useState to track whether we are showing books or movies
  // initially it will be set to booksOrMovies (from the url /catalog?type=books,) or by default books

  // function to toggle between books and movies

  return (
    <section>
      <p>this is the catalog page</p>
      {/* toggle button to display books or movies*/}

      {/* map through the catalog useState (show books or movies dep on isBooks toggle) */}
      {/* pass data to card */}
      {/* <MovieCard movieData={movie}/> */}
      {/* <BookCard bookData={book}/> */}

      {/* TEMP display first book or movie */}
      {booksOrMovies == "books" ? (
        <BookCard bookData={catalog.books[0]} />
      ) : (
        <MovieCard movieData={catalog.movies[0]} />
      )}
    </section>
  );
}
