import { useLoaderData } from "@remix-run/react";
import BookCard from "~/components/book-card";
import MovieCard from "~/components/movie-card";
import useCatalog from "../hooks/useCatalog";

// remix loader function
export async function loader({ request }) {
// get the current url  
  const url = new URL(request.url);
// check for ?type in url, default to "books"
  const type = url.searchParams.get("type") || "books";
// return the type to the component
  return { booksOrMovies: type };
}

export default function Catalog() {
  // get type (books or movies) from url
  const { booksOrMovies } = useLoaderData<typeof loader>();
  // get catalog data from context
  const { catalog } = useCatalog();

  // These are TODOs
  // useState to track whether we are showing books or movies
  // initially it will be set to booksOrMovies (from the url /catalog?type=books,) or by default books
  // function to toggle between books and movies

  {/* toggle button to display books or movies*/}

      
      {/* <MovieCard movieData={movie}/> */}
      {/* <BookCard bookData={book}/> */}

     
      return (
        <section className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold mb-8">
         {/* show text heading based on toggle state */}  
            {booksOrMovies === "books" ? "Books Catalog" : "Movies Catalog"}
          </h1>
        {/* responsive tailwind grids change shape with browser size and mobile */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
         {/* map through either books or movies, create BookCard, pass book data to card */}
            {booksOrMovies === "books" 
              ? catalog.books.map((book) => (
                  <BookCard key={book.id} bookData={book} />
                ))
              : catalog.movies.map((movie) => (
                  <MovieCard key={movie.id} movieData={movie} />
                ))
            }
          </div>
        </section>
      );
    
}
