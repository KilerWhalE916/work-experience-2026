import { getRoute } from "./routes";

export function App() {
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");

  const pathname = window.location.pathname.startsWith(base)
    ? window.location.pathname.slice(base.length) || "/"
    : window.location.pathname;

  const { Component } = getRoute(pathname);

  return <Component />;
}
