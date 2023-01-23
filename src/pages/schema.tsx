import { NextPage } from "next";
import { Layout } from "@/components";
import { withAuth } from "@/utils/auth";

const SchemaPage: NextPage = () => {
    return (
        <Layout>
            <div></div>
        </Layout>
    );
};

export const getServerSideProps = withAuth();

export default SchemaPage;
