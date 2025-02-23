import useCatalog from "~/hooks/useCatalog";

export default function Search() {
  const { setSearch } = useCatalog();

  return (
    <div className="flex items-center justify-end my-4">
      <div className="relative w-[14em]">
        <label htmlFor="Search" className="sr-only">
          {" "}
          Search{" "}
        </label>

        <input
          type="text"
          id="Search"
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search for..."
          className="shadow-xs px-4 py-2 border border-gray-200 rounded-md w-full sm:text-sm"
        />

        <span className="absolute inset-y-0 place-content-center grid w-10 end-0">
          <button type="button" className="text-gray-600 hover:text-gray-700">
            <span className="sr-only">Search</span>

            <SearchIcon />
          </button>
        </span>
      </div>
    </div>
  );
}

function SearchIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="size-4"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
      />
    </svg>
  );
}
