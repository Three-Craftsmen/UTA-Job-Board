import { createTRPCRouter } from "~/server/api/trpc";
import { generalInfoRouter } from "./routers/generalInfoRouter.ts";
import { applicationRouter } from "./routers/applicationRouter.js";
import { gradesInfoRouter } from "./routers/gradesInfoRouter.js";
import { timesInfoRouter } from "./routers/timesInfoRouter.js";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  general: generalInfoRouter,
  application: applicationRouter,
  grades: gradesInfoRouter,
  times: timesInfoRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
