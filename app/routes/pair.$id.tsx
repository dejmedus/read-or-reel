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
  //   title: string;
  //   director: string;
  //   description: string;
  //   imdbRating: number;
  //   yearReleased: string;
  //   genre: string[];
  //   imageUrl: string;
  // }

  // IBook {
  //   title: string;
  //   author: string;
  //   description: string;
  //   goodreadsRating: number;
  //   yearPublished: string;
  //   pageCount: string;
  //   genre: string[];
  //   imageUrl: string;
  // }

  return (
    <div>
      <h2>
        this is the selected pair: {book.title} {movie.title} {book.author}
      </h2>
    </div>
  );
}
