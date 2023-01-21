import Head from "next/head";
import { FormEvent, useState } from "react";

export default function Home() {
    const [databaseUrl, setDatabaseUrl] = useState("");
    const [query, setQuery] = useState("");
    const [output, setOutput] = useState<any>();

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        const response = await fetch("/api/", {
            method: "POST",
            headers: {
                "content-type": "application/json",
                accept: "application/json",
            },
            body: JSON.stringify({
                databaseUrl,
                query,
            }),
        });
        const data = await response.json();
        setOutput(data);
    };

    return (
        <>
            <Head>
                <title>Create Next App</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="flex flex-col space-y-4 p-10">
                <form
                    onSubmit={handleSubmit}
                    className="flex flex-col space-y-4 p-4 rounded border w-full max-w-xl mx-auto"
                >
                    <input
                        onChange={(e) => setDatabaseUrl(e.target.value)}
                        value={databaseUrl}
                        placeholder="Database URL"
                        type="text"
                        name="databaseUrl"
                        id="databaseUrl"
                    />
                    <input
                        onChange={(e) => setQuery(e.target.value)}
                        value={query}
                        placeholder="Query"
                        type="text"
                        name="query"
                        id="query"
                    />
                    <button
                        type="submit"
                        className="rounded bg-indigo-500 text-white py-1"
                    >
                        Execute
                    </button>
                </form>
                <div>
                    {output && output.result && output.fields && (
                        <table className="mx-auto border rounded-lg">
                            <thead className="border-b">
                                {output.fields.map((field: any) => (
                                    <th
                                        className="px-2 text-right text-sm font-normal text-gray-600 py-1 border-r"
                                        key={field.name}
                                    >
                                        {field.name}
                                    </th>
                                ))}
                            </thead>
                            <tbody>
                                {output.result.map(
                                    (row: any, index: number) => (
                                        <tr key={index}>
                                            {Object.values(row).map(
                                                (value: any, index: number) => (
                                                    <td
                                                        className="text-right text-sm border-r py-1 px-4"
                                                        key={index}
                                                    >
                                                        {JSON.stringify(value)}
                                                    </td>
                                                )
                                            )}
                                        </tr>
                                    )
                                )}
                            </tbody>
                        </table>
                    )}
                </div>
            </main>
        </>
    );
}
