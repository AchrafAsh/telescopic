import { NextPage } from "next";
import { signIn } from "next-auth/react";

const AuthPage: NextPage = () => {
    return (
        <div className="h-screen grid grid-cols-2">
            <div className="border-r flex items-center justify-center">
                <button
                    onClick={() => signIn("github", { callbackUrl: "/" })}
                    className="rounded-md bg-gradient-to-b from-slate-800 to-slate-600 py-2 px-4 flex items-center hover:shadow-md transition-shadow"
                >
                    <span className="text-white">Continue with GitHub</span>
                </button>
            </div>
            <div>Features???</div>
        </div>
    );
};

export default AuthPage;
