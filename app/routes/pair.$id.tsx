import type { LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import useCatalog from "../hooks/useCatalog";

export async function loader({ params }: LoaderFunctionArgs) {
  return { id: Number(params.id) };
}

export default function Book() {
  const { id } = useLoaderData<typeof loader>();
  const { getPair } = useCatalog();

  if (!id) {
    return (
      <div>
        <h2>Oops this book is missing!</h2>
      </div>
    );
  }

  const { book, movie } = getPair(id);
  // Book:
  //   title: string;
  //   author: string;
  //   description: string;
  //   goodreadsRating: number;
  //   yearPublished: string;
  //   pageCount: string;
  //   genre: string[];
  //   imageUrl: string;
  //
  // Movie:
  //   title: string;
  //   director: string;
  //   description: string;
  //   imdbRating: number;
  //   yearReleased: string;
  //   genre: string[];
  //   imageUrl: string;

  return (
    <div className="text-center pt-5">
      {/* Title */}
      <h1 className="text-3xl font-bold mb-2">{book.title}</h1>
      {/* Genre displayed below the title */}
      <p className="text-lg italic mb-5">
        Genre: {book.genre.join(", ")}
      </p>

      {/* Grid Layout */}
      <div className="grid grid-cols-2 gap-5 items-center justify-center">
        {/* Book */}
        <div>
          <img 
            src={book.imageUrl} 
            alt={book.title} 
            className="mx-auto w-full max-w-xs rounded-lg" 
          />
          <p className="text-lg font-semibold mt-2">📖 Book</p>
          <p className="text-base italic mt-1">✍️ Author: {book.author}</p>
          <p className="text-base italic mt-1"> Description: {book.description}</p> 
          <p className="text-base italic mt-1">🗓️ Year: {book.yearPublished}</p>
          <p className="text-base italic mt-1">⭐ Rating: {book.goodreadsRating}</p>
        </div>

        {/* Movie */}
        <div>
          <img 
            src={movie.imageUrl} 
            alt={movie.title} 
            className="mx-auto w-full max-w-xs rounded-lg" 
          />
          <p className="text-lg font-semibold mt-2">🎬 Movie</p>
          <p className="text-base italic mt-1">🎥 Director: {movie.director}</p>
          <p className="text-base italic mt-1"> Description: {movie.description}</p>    
          <p className="text-base italic mt-1">🗓️ Year: {movie.yearReleased}</p>
          <p className="text-base italic mt-1">⭐ Rating: {movie.imdbRating}</p>
        </div>
      </div>
    </div>
  );
}
