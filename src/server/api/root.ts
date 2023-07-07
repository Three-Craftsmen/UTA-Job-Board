import { createTRPCRouter } from "~/server/api/trpc";
import { generalInfoRouter } from "./routers/generalInfoRouter";
import { applicationRouter } from "./routers/applicationRouter";
import { gradesInfoRouter } from "./routers/gradesInfoRouter";
import { timesInfoRouter } from "./routers/timesInfoRouter";

/**
 * This is the primary router for the server.
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
