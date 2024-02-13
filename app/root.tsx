import type { LinksFunction, MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useRouteError,
  Link,
} from "@remix-run/react";
import stylesheet from "./tailwind.css";
import MainNavigation from "../app/components/MainNavigation";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
];

export const meta: MetaFunction = () => {
  return [
    { title: "Gary's To do" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <MainNavigation />
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

export function ErrorBoundary() {
  const error = useRouteError();
  console.error(error);
  return (
    <html>
      <head>
        <title>Oh no!</title>
        <Meta />
        <Links />
      </head>
      <body>
        <MainNavigation />
        <p>Something went wrong</p>
        <Link to="/">Take me Back to Safety</Link>
        <Scripts />
      </body>
    </html>
  );
}
