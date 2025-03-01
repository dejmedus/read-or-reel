import { createContext, useContext, useEffect, useState } from "react";
import { CatalogContextType, ICatalog, IPair } from "../data/types";
import filterCatalog from "~/utils/filterCatalog";
import databaseJSON from "../data/data.json";

// Context is like a storage locker where we store data we want multiple components to access
// provides the shape of the context and default values. CatalogContext will actually fill
// the context with the data
const defaultContext: CatalogContextType = {
  catalog: databaseJSON as ICatalog,
  // placeholder funtions to show the context what type of data to expect
  getPair: () => ({} as IPair),
  search: "",
  setSearch: () => {},
};

const CatalogContext = createContext<CatalogContextType>(defaultContext);

// Provider component is a wrapper, makes catalog data vailable to all child components
export function CatalogProvider({ children }: { children: React.ReactNode }) {
  // state variable and state management
  const [catalog, setCatalog] = useState<ICatalog>(defaultContext.catalog);
  const [search, setSearch] = useState<string>("");

  // runs when the component mounts, runs only once, loads date fr JSON
  useEffect(() => {
    setCatalog(databaseJSON as ICatalog);
  }, []);

  useEffect(() => {
    if (search === "") {
      setCatalog(databaseJSON as ICatalog);
      return;
    }

    const filteredCatalog = filterCatalog(databaseJSON as ICatalog, search);

    filteredCatalog.length === 0
      ? setCatalog(databaseJSON as ICatalog)
      : setCatalog(filteredCatalog);
  }, [search]);

  // utility functions available to any component using the context
  const getPair = (id: number) => {
    return catalog.find((pair) => pair.id === id);
  };

  return (
    <CatalogContext.Provider value={{ catalog, getPair, search, setSearch }}>
      {children}
    </CatalogContext.Provider>
  );
}
// custom React hook to access context. Any component can call useCatalog()
export default function useCatalog() {
  return useContext(CatalogContext);
}
