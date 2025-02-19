import CatalogLinkCard from "~/components/catalog-link-card";
import FAQ from "~/components/faqs";

export default function Index() {
  return (
    <main className="container mx-auto px-6 py-8 flex flex-col items-center justify-center min-h-screen">
      {/* Hero Section */}
      <section className="hero text-center">
        <h1 className="text-5xl font-extrabold text-gray-900 dark:text-white">
          Reel or Reed
        </h1>
        <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">
          Discover amazing books and movies curated for you.
        </p>
      </section>

      {/* Catalog Section */}
      <section className="my-12 text-center">
        <h2 className="text-3xl font-bold">Movies or Books</h2>
        <div className="flex flex-col md:flex-row gap-6 justify-center items-center mt-6">
          <div className="w-72 rounded-lg border border-gray-300 dark:border-gray-700 p-6 bg-white dark:bg-gray-800 shadow-md transition-transform duration-200 transform hover:scale-105">
            <div className="h-40 bg-gray-200 dark:bg-gray-700 rounded-lg"></div>
            <CatalogLinkCard
              name="Movies"
              path="/catalog?type=movies"
              description="Dive into an exciting selection of movies curated for you."
            />
          </div>
          <div className="w-72 rounded-lg border border-gray-300 dark:border-gray-700 p-6 bg-white dark:bg-gray-800 shadow-md transition-transform duration-200 transform hover:scale-105">
            <div className="h-40 bg-gray-200 dark:bg-gray-700 rounded-lg"></div>
            <CatalogLinkCard
              name="Books"
              path="/catalog?type=books"
              description="Explore a vast collection of books across various genres."
            />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full max-w-lg my-12">
        <h2 className="text-3xl font-bold text-center">FAQs</h2>
        <FAQ />
      </section>
    </main>
    
    
  );
}
