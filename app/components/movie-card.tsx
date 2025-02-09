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
    <Link className="hover:font-bold underline" to={`/movies/${id}`}>
      <div>this is a card for {title} movie</div>
    </Link>
  );
}
