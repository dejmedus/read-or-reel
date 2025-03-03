import { Link } from "@remix-run/react";

import { IMovie, IBook } from "../data/types";

export default function Card({
  data,
  id,
}: {
  data: IMovie | IBook;
  id: number;
}) {
  const { title, imageUrl } = data;

  return (
    <Link to={`/pair/${id}`} className="hover:underline block">
      <div className="max-w-sm  flex justify-center">
        <img
          src={imageUrl}
          alt={` poster for ${title}`}
          className="w-auto h-[450px] object-cover rounded-lg"
        />
      </div>

      <h2 className="px-4 py-2 text-center font-semibold text-xl text-neutral-800">
        {title}
      </h2>
    </Link>
  );
}
