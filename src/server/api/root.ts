import { createTRPCRouter } from "~/server/api/trpc";
import { generalInfoRouter } from "./routers/generalInfoRouter.ts";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  general: generalInfoRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
