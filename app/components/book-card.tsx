import { Link } from "@remix-run/react";
import { IBook } from "../data/types";

export default function BookCard({
  bookData,
  bookId,
}: {
  bookData: IBook;
  bookId: number;
}) {
  const { title, imageUrl } = bookData;

  return (
    <Link to={`/books/${bookId}`} className="block">
      <div className="shadow-lg rounded max-w-sm overflow-hidden">
        <img
          src={imageUrl}
          alt={`Cover of ${title}`}
          className="w-full h-64 object-cover"
        />
        <div className="px-4 py-2">
          <h2 className="font-bold text-xl">{title}</h2>
        </div>
      </div>
    </Link>
  );
}
