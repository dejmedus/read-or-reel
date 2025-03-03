import { useLoaderData } from "@remix-run/react";
import Card from "~/components/catalog-card";
import useCatalog from "../hooks/useCatalog";
import Search from "~/components/search";

// remix loader function
export async function loader({ request }) {
  // get the current url
  const url = new URL(request.url);
  // check for ?type in url, default to "books"
  const type = url.searchParams.get("type") || "books";
  // return the type to the component
  return { booksOrMovies: type };
}

export default function Catalog() {
  const { booksOrMovies } = useLoaderData<typeof loader>();
  const { catalog } = useCatalog();

  return (
    <section className="container grid justify-center mx-auto px-4 py-8">
      <Search />
      <h1 className="text-3xl font-bold mb-8 mx-4">
        {booksOrMovies === "books" ? "Books" : "Movies"}
      </h1>
      {/* responsive tailwind grids change shape with browser size and mobile */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {catalog.map((pair) =>
          booksOrMovies === "books"
            ? pair.book && <Card key={pair.id} id={pair.id} data={pair.book} />
            : pair.movie && (
                <Card key={pair.id} id={pair.id} data={pair.movie} />
              )
        )}
      </div>
    </section>
  );
}
