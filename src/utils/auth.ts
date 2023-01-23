import { GetServerSidePropsContext, NextApiHandler } from "next";
import { unstable_getServerSession } from "next-auth";

export const authOptions = {};

export const withAuth =
    (handler?: NextApiHandler) =>
    async (context: GetServerSidePropsContext) => {
        const session = await unstable_getServerSession(
            context.req,
            context.res,
            authOptions
        );
        if (!session) {
            context.res.setHeader("location", "/auth");
            context.res.statusCode = 302;
            context.res.end();
            return { props: {} };
        }
        if (!handler) {
            return { props: {} };
        }
        return handler;
    };
