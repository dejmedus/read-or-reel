import type { LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

import useCatalog from "../hooks/useCatalog";

export async function loader({ params }: LoaderFunctionArgs) {
  return { id: Number(params.id) };
}

export default function Book() {
  const { id } = useLoaderData<typeof loader>();
  const { getBook } = useCatalog();

  if (!id) {
    return (
      <div>
        <h2>Oops this book is missing!</h2>
      </div>
    );
  }

  const book = getBook(id);
  // book will look like:
  // "id": 1,
  // "title": "book name",
  // "author": "",
  // "description": "",
  // "goodreadsRating": 5.0,
  // "yearPublished": "",
  // "pageCount": "",
  // "genre": [],
  // "imageUrl": ""

  return (
    <div>
      <h2>this is the selected book: {book.title}</h2>
    </div>
  );
}
