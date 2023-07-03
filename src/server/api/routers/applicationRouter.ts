import { z } from "zod";
import { createTRPCRouter, protectedProcedure } from "~/server/api/trpc";

export const applicationRouter = createTRPCRouter({
  // createApplication: protectedProcedure
  // deleteApplication: protectedProcedure
  // getApplication: protectedProcedure
});
