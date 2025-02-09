import CatalogLinkCard from "~/components/catalog-link-card";
import FAQ from "~/components/faqs";

export default function Index() {
  return (
    <main>
      <h2>this is the homepage</h2>

      <section className="flex gap-2">
        <CatalogLinkCard
          name="Books"
          path="/catalog?type=books"
          description="this will take us to the catalog and show us books"
        />
        <CatalogLinkCard
          name="Movies"
          path="/catalog?type=movies"
          description="this will take us to the catalog and show us movies"
        />
      </section>

      <FAQ />
    </main>
  );
}
