import CatalogLinkCard from "~/components/catalog-link-card";
import FAQs from "~/components/faqs";

export default function Index() {
  return (
    <main className="container mx-auto px-6 py-12 mt-14 flex flex-col items-center justify-center min-h-screen">
      {/* Hero Section */}
      <section className="hero text-center flex flex-col gap-4">
        <h1 className="text-5xl font-extrabold text-gray-900 dark:text-white">
          Reel or Reed
        </h1>
        <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">
          Discover amazing books and movies curated for you.
        </p>
      </section>

      {/* Catalog Section */}
      <section className="my-12 text-center flex flex-col gap-6">
        <h2 className="text-3xl font-bold">Movies or Books</h2>
        <div className="flex flex-col md:flex-row gap-6 justify-center items-center mt-6">
          <CatalogLinkCard
            name="Movies"
            path="/catalog?type=movies"
            description="Dive into an exciting selection of movies curated for you."
          />
          <CatalogLinkCard
            name="Books"
            path="/catalog?type=books"
            description="Explore a vast collection of books across various genres."
          />
        </div>
      </section>

      <FAQs />
    </main>
  );
}
