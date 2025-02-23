import { Link } from "@remix-run/react";

interface ICatalogLinkCard {
  name: string;
  description: string;
  path: string;
}

export default function CatalogLinkCard({
  name,
  description,
  path,
}: ICatalogLinkCard) {
  return (
    <Link
      className="w-80 rounded-lg border border-gray-300 dark:border-gray-700 p-6 bg-white dark:bg-gray-800 shadow-md transition-transform duration-200 transform hover:scale-105 flex flex-col gap-4"
      to={path}
    >
      <img
        src={`assets/images/${name}.jpg`}
        alt={name}
        className="h-50 w-full bg-gray-200 rounded-lg"
      />
      <h2 className="font-bold text-xl">{name}</h2>
      <div>{description}</div>
    </Link>
  );
}
