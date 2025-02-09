import type { LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

import useCatalog from "../hooks/useCatalog";

export async function loader({ params }: LoaderFunctionArgs) {
  return { id: Number(params.id) };
}

export default function Movie() {
  const { id } = useLoaderData<typeof loader>();
  const { getMovie } = useCatalog();

  if (!id) {
    return (
      <div>
        <h2>Oops this movie is missing!</h2>
      </div>
    );
  }

  const movie = getMovie(id);
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
