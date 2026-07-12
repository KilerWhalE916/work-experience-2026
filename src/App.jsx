import { getRoute } from "./routes";

export function App() {
  const { Component } = getRoute(window.location.pathname);

  return <Component />;
}
