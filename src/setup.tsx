// setup.ts
import { QueryClient } from "@tanstack/react-query";
import { createRouter } from "@tanstack/react-router";

import { routeTree } from "@/routeTree.gen";
import { NotFound } from "@/not-found";
import { Loading } from "@/loading";
import { Error } from "@/error";

// Create a QueryClient instance
export const queryClient = new QueryClient();

// Create a router instance
export const router = createRouter({
  routeTree,
  defaultNotFoundComponent: () => <NotFound />,
  defaultPendingComponent: () => <Loading />,
  defaultErrorComponent: ({ error, reset }) => (
    <Error error={error} reset={reset} />
  ),
  context: {
    auth: undefined,
    queryClient,
  },
  defaultPreload: "intent",
  defaultPreloadStaleTime: 0,
});

// Register the router instance for type safety
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
