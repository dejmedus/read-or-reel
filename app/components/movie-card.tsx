import { Link } from "@remix-run/react";

import { IMovie } from "../data/types";

export default function MovieCard({ movieData }: { movieData: IMovie }) {
  const {
    id,
    title,
    director,
    description,
    imdbRating,
    yearReleased,
    genre,
    imageUrl,
  } = movieData;

  console.log(
    id,
    title,
    director,
    description,
    imdbRating,
    yearReleased,
    genre,
    imageUrl
  );

  return (
    <Link to={`/movies/${id}`} className="block">
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
