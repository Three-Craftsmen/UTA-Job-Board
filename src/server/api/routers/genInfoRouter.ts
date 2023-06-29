import { z } from "zod";
import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
} from "~/server/api/trpc";

// export const exampleRouter = createTRPCRouter({
//   hello: publicProcedure
//     .input(z.object({ text: z.string() }))
//     .query(({ input }) => {
//       return {
//         greeting: `Hello ${input.text}`,
//       };
//     }),

//   getAll: publicProcedure.query(({ ctx }) => {
//     return ctx.prisma.example.findMany();
//   }),

//   getSecretMessage: protectedProcedure.query(() => {
//     return "you can now see this secret message!";
//   }),
// });

export const userDataRouter = createTRPCRouter({
    userDataPut: protectedProcedure
    .input(z.object({
        firstName: z.string(), //User
        lastName: z.string(), //User
        gnumber: z.string(), //User
        email: z.string(), //User
        phoneNumber: z.string(), //App
        major: z.string(), //App
        graduationDate: z.string(), //App 
        overallGPA: z.string(), //App
        prevSemGPA: z.string(), //App
        creditsLastSem: z.string(), //App
        newUTA: z.string(), //App
        prevUTAType: z.string(), //App
        prevUTACourses: z.string(), //App
        preferredProfs: z.string(), //App
        recommender: z.string(), //App
        essay: z.string() //App
    }))
    .mutation(({ ctx, input }) => {
        return {
            ctx.primsa.user.update({
                data: {
                    firstName: input.firstName, 
                    lastName: input.lastName, 
                    gnumber: input.gnumber,
                    email: input.email,
                }
            })
            ctx.prisma.application.update({
                data: {
                    phoneNumer: input.phoneNumber,
                    major: input.major,
                    graduationDate: input.graduationDate,
                    overallGPA: input.overallGPA,
                    prevSemGPA: input.prevSemGPA,
                    creditsLastSem: input.creditsLastSem,
                    newUTA: input.newUTA,
                    prevUTAType: input.prevUTAType,
                    prevUTACourses: input.prevUTACourses,
                    preferredProfs: input.preferredProfs,
                    recommender: input.recommender,
                    essay: input.essay,
                }
            })
        }
    })
})
