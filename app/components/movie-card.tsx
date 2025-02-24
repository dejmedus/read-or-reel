import { Link } from "@remix-run/react";

import { IMovie } from "../data/types";

export default function MovieCard({
  movieData,
  movieId,
}: {
  movieData: IMovie;
  movieId: number;
}) {
  const {
    title,
    // director,
    // description,
    // imdbRating,
    // yearReleased,
    // genre,
    imageUrl,
  } = movieData;

  return (
    <Link to={`/pair/${movieId}`} className="block">
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <img
          src={imageUrl}
          alt={`Movie poster for ${title}`}
          className="w-full h-64 object-cover"
        />
        <div className="px-4 py-2">
          <h2 className="font-bold text-xl">{title}</h2>
        </div>
      </div>
    </Link>
  );
}
