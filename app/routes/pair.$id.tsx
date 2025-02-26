import type { LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import useCatalog from "../hooks/useCatalog";
import StarRating from "~/components/star-rating";

export async function loader({ params }: LoaderFunctionArgs) {
  return { id: Number(params.id) };
}

export default function Book() {
  const { id } = useLoaderData<typeof loader>();
  const { getPair } = useCatalog();

  if (!id) {
    return (
      <div>
        <h2>Oops, we cant find what youre looking for!</h2>
      </div>
    );
  }

  const { book, movie } = getPair(id);

  return (
    <div className="text-center pt-5">
      {/* Title */}
      <h1 className="text-3xl font-bold mb-2">
        {book ? book.title : movie.title}
      </h1>
      {/* Genre displayed below the title */}
      <p className="text-lg italic mb-5">
        Genre: {book ? book.genre.join(", ") : movie.genre.join(", ")}
      </p>

      {/* Grid Layout */}
      <div
        className={`grid my-12 ${
          book && movie ? "grid-cols-2" : "grid-cols-1"
        } gap-5 items-center justify-center`}
      >
        {/* Book */}
        {book ? (
          <div className="flex flex-col gap-2">
            <img
              src={book.imageUrl}
              alt={book.title}
              className="mx-auto w-full max-w-xs rounded-lg"
            />
            <p className="text-lg font-semibold mt-2">📖 Book</p>
            <p className="text-base italic mt-1">✍️ Author: {book.author}</p>
            <p className="text-base italic mt-1 flex justify-center">
              <span className=" max-w-[700px]">
                Description: {book.description}
              </span>
            </p>
            <p className="text-base italic mt-1">
              🗓️ Year: {book.yearPublished}
            </p>
            <div className="mt-1 flex justify-center">
              {/* call StarRating component, pass the ratings as props to component */}
              <StarRating rating={book.goodreadsRating} />
            </div>
          </div>
        ) : (
          <h2>Right now, there&apos;s no film version of {movie.title}.</h2>
        )}

        {/* Movie */}
        {movie ? (
          <div className="flex flex-col gap-2">
            <img
              src={movie.imageUrl}
              alt={movie.title}
              className="mx-auto w-full max-w-xs rounded-lg"
            />
            <p className="text-lg font-semibold mt-2">🎬 Movie</p>
            <p className="text-base italic mt-1">
              🎥 Director: {movie.director}
            </p>
            <p className="text-base italic mt-1 flex justify-center">
              <span className=" max-w-[700px]">
                Description: {movie.description}
              </span>
            </p>
            <p className="text-base italic mt-1">
              🗓️ Year: {movie.yearReleased}
            </p>
            <div className="mt-1 flex justify-center">
              {/* call StarRating component, use IMDB boolean to trigger normalizing rating */}
              <StarRating rating={movie.imdbRating} isIMDB={true} />
            </div>
          </div>
        ) : (
          <h2>Right now, there&apos;s no film version of {book.title}.</h2>
        )}
      </div>
    </div>
  );
}
