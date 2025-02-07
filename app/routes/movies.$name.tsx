import type { LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

import useCatalog from "../hooks/useCatalog";

export async function loader({ params }: LoaderFunctionArgs) {
  return { name: params.name };
}

export default function Movie() {
  const { name } = useLoaderData<typeof loader>();
  const { getMovie } = useCatalog();

  if (!name) {
    return (
      <div>
        <h2>Oops this movie is missing!</h2>
      </div>
    );
  }

  const movie = getMovie(name);
  // movie will look like:
  //   "id": 1,
  //   "title": "movie name",
  //   "director": "",
  //   "description": "",
  //   "imdbRating": 5.0,
  //   "yearReleased": "",
  //   "genre": [],
  //   "imageUrl": ""
  console.log("Movie", movie);

  return (
    <div>
      <h2>this is the page for movie: {movie.title}</h2>
    </div>
  );
}
