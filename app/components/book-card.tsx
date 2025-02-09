import { Link } from "@remix-run/react";
import { IBook } from "../data/types";

export default function BookCard({ bookData }: { bookData: IBook }) {
  const {
    id,
    title,
    author,
    description,
    goodreadsRating,
    yearPublished,
    genre,
    imageUrl,
  } = bookData;

  console.log(
    id,
    title,
    author,
    description,
    goodreadsRating,
    yearPublished,
    genre,
    imageUrl
  );

  return (
    <Link className="hover:font-bold underline" to={`/books/${id}`}>
      <div>this is a card for {title} book</div>
    </Link>
  );
}
