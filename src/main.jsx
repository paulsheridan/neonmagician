import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'
import {
  RouterProvider,
  createRouter,
  createHashHistory,
  createRootRoute,
  createRoute,
} from "@tanstack/react-router";

import About from "./components/Sections/About";
import Designs from "./components/Sections/Designs";
import Portfolio from "./components/Sections/Portfolio";
import Aftercare from "./components/Sections/Aftercare";
import Blog from "./components/Blog/Posts";
import ConsentForm from "./components/Sections/ConsentForm";
import Landing from "./components/Sections/Landing";
import theme from "./theme";
import App from './App';
import NotFound from './components/Common/NotFound';

const rootRoute = createRootRoute({
  component: App,
  notFoundComponent: NotFound
});

const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: Landing,
});

const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/about",
  component: About,
});

const designsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/designs",
  component: Designs,
});

const portfolioRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/portfolio",
  component: Portfolio,
});

const aftercareRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/aftercare",
  component: Aftercare,
});

const blogRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/blog",
  component: Blog,
});

const consentFormRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/consent",
  component: ConsentForm,
});

const routeTree = rootRoute.addChildren([
  homeRoute,
  aboutRoute,
  designsRoute,
  portfolioRoute,
  aftercareRoute,
  blogRoute,
  consentFormRoute,
]);

const router = createRouter({
  routeTree,
  history: createHashHistory("/"),
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ChakraProvider theme={theme}>
      <RouterProvider router={router} />
    </ChakraProvider>
  </StrictMode>
);
