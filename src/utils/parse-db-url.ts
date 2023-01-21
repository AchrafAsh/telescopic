import url from "url";

/**
 * This is the exported function that parses database URLs.
 *
 * @param {String} databaseUrl the URL to be parsed
 * @return {Object<String, String>} the database configuration; this will
 *     always have the "driver" key pointing to a database driver, and may
 *     have some of the following keys: "host", "port", "user", "password",
 *     "database", "filename"
 */
export default function parseDatabaseUrl(databaseUrl: string) {
    const parsedUrl = url.parse(databaseUrl, false, true);

    const [user, password] = parsedUrl.auth?.split(":") || [];
    const [host, port] = parsedUrl.host?.split(":") || [];
    const database = parsedUrl.pathname?.slice(1);

    return { user, password, host, database, port };
}
