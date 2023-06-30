import { z } from "zod";
import { createTRPCRouter, protectedProcedure } from "~/server/api/trpc";

export const userDataRouter = createTRPCRouter({
  /**
   * updateUserData endpoint:
   */
  updateUserData: protectedProcedure
    .input(
      z.object({
        firstName: z.string(),
        lastName: z.string(),
        gnumber: z.string(),
        email: z.string(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const user = await ctx.prisma.user.update({
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
      return user;
    }),

  /**
   * updateApplicationData endpoint:
   */
  updateApplicationData: protectedProcedure
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
      const userId = ctx.session.user.id;
      const application = await ctx.prisma.application.update({
        where: {
          id: userId,
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

      return application;
    }),
});
