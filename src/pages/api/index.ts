// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import mysql from "mysql2/promise";
import { parseDatabaseUrl } from "@/utils";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const { databaseUrl, query } = req.body;
    const { user, password, host, database } = parseDatabaseUrl(databaseUrl);
    const connection = await mysql.createConnection({
        host,
        user,
        database,
        password,
    });

    const [result, fields] = await connection.query(query);

    res.status(200).json({ result, fields });
}
