import {
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";

import Landing from "./components/Sections/Landing";
import App from "./App";
import NotFound from "./components/Common/NotFound";
import About from "./components/Sections/About";
import Designs from "./components/Sections/Designs";
import Portfolio from "./components/Sections/Portfolio";
import Aftercare from "./components/Sections/Aftercare";
import Blog from "./components/Blog/Posts";
import ConsentForm from "./components/Sections/ConsentForm";
import DefaultLayout from "./components/Layouts/DefaultLayout";

const rootRoute = createRootRoute({
  component: DefaultLayout,
  notFoundComponent: NotFound,
});

export const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/neonmagician",
});

export const landingRoute = createRoute({
  getParentRoute: () => indexRoute,
  path: "/",
  component: Landing,
});

export const aboutRoute = createRoute({
  getParentRoute: () => indexRoute,
  path: "/neonmagician/about",
  component: About,
});

export const designsRoute = createRoute({
  getParentRoute: () => indexRoute,
  path: "/designs",
  component: Designs,
});

export const portfolioRoute = createRoute({
  getParentRoute: () => indexRoute,
  path: "/portfolio",
  component: Portfolio,
});

export const aftercareRoute = createRoute({
  getParentRoute: () => indexRoute,
  path: "/aftercare",
  component: Aftercare,
});

export const blogRoute = createRoute({
  getParentRoute: () => indexRoute,
  path: "/blog",
  component: Blog,
});

export const consentFormRoute = createRoute({
  getParentRoute: () => indexRoute,
  path: "/consent",
  component: ConsentForm,
});

const routeTree = rootRoute.addChildren([
  indexRoute.addChildren([
    landingRoute,
    aboutRoute,
    designsRoute,
    portfolioRoute,
    aftercareRoute,
    blogRoute,
    consentFormRoute,
  ]),
]);

export const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
