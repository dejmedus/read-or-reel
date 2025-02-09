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
    <Link className="border-2 hover:border-4 rounded hover:font-bold" to={path}>
      <h2>{name}</h2>
      <div>{description}</div>
    </Link>
  );
}
