import { Link } from "@remix-run/react";
import { IBook } from "../data/types";

export default function BookCard({ bookData }: { bookData: IBook }) {
  const {
    id,
    title,
    imageUrl,
  } = bookData;

  console.log(
    id,
    title,
   
    imageUrl
  );

  return (
    <Link to={`/books/${id}`} className="block">
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
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
