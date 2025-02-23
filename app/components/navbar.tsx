import { Link, useLocation } from "@remix-run/react";

export default function Navbar() {
  const location = useLocation();

  if (location.pathname === "/") return;

  return (
    <header className="bg-white py-4 text-black dark:bg-gray-800 dark:text-white">
      <div
        className="flex h-16 items-center justify-between
        mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8"
      >
        <h1 className="text-lg font-semibold">
          <Link to="/"> Reed or Reel</Link>
        </h1>

        <div className="hidden sm:block">
          <nav aria-label="Global">
            <ul className="flex items-center gap-6 text-sm">
              <NavLink path="/catalog?type=books" name="Books" />
              <NavLink path="/catalog?type=movies" name="Movies" />
            </ul>
          </nav>
        </div>
        <div />
      </div>
    </header>
  );
}

function NavLink({ path, name }: { path: string; name: string }) {
  const location = useLocation();
  const isCurrentPage = location.search.split("=")[1] === name.toLowerCase();

  return (
    <li className={isCurrentPage ? "underline" : ""}>
      <Link to={path}>{name}</Link>
    </li>
  );
}
