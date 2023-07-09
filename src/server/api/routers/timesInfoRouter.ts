import { z } from "zod";
import { createTRPCRouter, protectedProcedure } from "~/server/api/trpc";

export const timesInfoRouter = createTRPCRouter({
  /* TODO: updateTimesInfo: protectedProcedure */
  /* TODO: getTimesInfo: protectedProcedure */

  getAllDuties: protectedProcedure.query(async ({ ctx }) => {
    const duties = await ctx.prisma.duty.findMany();
    return duties;
  }),

  getAllOnCampusBlocks: protectedProcedure.query(async ({ ctx }) => {
    const onCampusBlocks = await ctx.prisma.oncampusBlock.findMany();
    return onCampusBlocks;
  }),

  getAllOnlineBlocks: protectedProcedure.query(async ({ ctx }) => {
    const onlineBlocks = await ctx.prisma.onlineBlock.findMany();
    return onlineBlocks;
  }),
});
