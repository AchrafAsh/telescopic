import { NextPage } from "next";
import { Layout } from "@/components";
import { withAuth } from "@/utils/auth";

const SettingsPage: NextPage = () => {
    return (
        <Layout>
            <div></div>
        </Layout>
    );
};

export const getServerSideProps = withAuth();

export default SettingsPage;
