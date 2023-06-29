import { z } from "zod";
import { createTRPCRouter, protectedProcedure } from "~/server/api/trpc";

export const userDataRouter = createTRPCRouter({
  userDataPut: protectedProcedure
    .input(
      z.object({
        firstName: z.string(),
        lastName: z.string(),
        gnumber: z.string(),
        email: z.string(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      return await ctx.prisma.user.update({
        where: {
          id: input.gnumber,
        },
        data: {
          firstName: input.firstName,
          lastName: input.lastName,
          gnumber: input.gnumber,
          email: input.email,
        },
      });
    }),

  applicationDataPut: protectedProcedure
    .input(
      z.object({
        phoneNumber: z.string(),
        major: z.string(),
        graduationDate: z.string(),
        overallGPA: z.number(),
        prevSemGPA: z.number(),
        creditsLastSem: z.number(),
        newUTA: z.boolean(),
        prevUTAType: z.string(),
        preferredProfs: z.string(),
        recommender: z.string(),
        essay: z.string(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      return await ctx.prisma.application.update({
        where: {
          id: input.phoneNumber,
        },
        data: {
          phoneNumber: input.phoneNumber,
          major: input.major,
          graduationDate: input.graduationDate,
          overallGPA: input.overallGPA,
          prevSemGPA: input.prevSemGPA,
          creditsLastSem: input.creditsLastSem,
          newUTA: input.newUTA,
          prevUTAType: input.prevUTAType,
          preferredProfs: input.preferredProfs,
          recommender: input.recommender,
          essay: input.essay,
        },
      });
    }),
});
