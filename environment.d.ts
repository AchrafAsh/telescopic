declare namespace NodeJS {
    interface ProcessEnv {
        readonly NEXT_PUBLIC_URI: string;
        readonly NEXTAUTH_SECRET: string;
        readonly NEXTAUTH_URL: string;
        readonly GITHUB_ID: string;
        readonly GITHUB_SECRET: string;
    }
}
