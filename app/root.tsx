import {
  Links,
  Meta,
  MetaFunction,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import type { LinksFunction } from "@remix-run/node";

import Navbar from "./components/navbar";
import Footer from "./components/footer";

import "./tailwind.css";
import { CatalogProvider } from "./hooks/useCatalog";

export const links: LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
];

export const meta: MetaFunction = () => {
  return [
    { title: "Read or Reel" },
    {
      name: "description",
      content: "Was the book or the movie better? (spoiler: the book)",
    },
  ];
};

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <CatalogProvider>
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <Meta />
          <Links />
        </head>
        <body>
          <Navbar />
          {children}
          <Footer />
          <ScrollRestoration />
          <Scripts />
        </body>
      </html>
    </CatalogProvider>
  );
}

export default function App() {
  return <Outlet />;
}
