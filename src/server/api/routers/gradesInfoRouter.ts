import { z } from "zod";
import { createTRPCRouter, protectedProcedure } from "~/server/api/trpc";

export const gradesInfoRouter = createTRPCRouter({
  /* TODO: updateGradesInfo: protectedProcedure */

  /* TODO: getGradesInfo: protectedProcedure */

  getAllCourses: protectedProcedure.query(async ({ ctx }) => {
    const courses = await ctx.prisma.course.findMany();
    return courses;
  }),
});
