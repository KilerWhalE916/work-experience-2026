import {
  ExamplePage,
  HomePage,Intro,SpendingPage,TransferPage,
  Login,
  CurrencyConvPage,
  CreditScore,
  MortgageCalc,
  Navforconv,
} from "./pages";
import { routeManifest } from "./routes.manifest";

const routeComponents = {
  ExamplePage,
  HomePage,
  Login,
  CurrencyConvPage,
  CreditScore,
  Intro,
  TransferPage,
  SpendingPage,
  MortgageCalc,
 Navforconv,
};

export const routes = routeManifest.map((route) => {
  const Component = routeComponents[route.component];

  if (!Component) {
    throw new Error(`No page component registered for ${route.component}`);
  }

  return {
    ...route,
    Component,
  };
});

export function getRoute(pathname) {
  return routes.find((route) => route.path === pathname) ?? routes[0];
}
