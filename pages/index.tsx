import { GetServerSideProps } from "next";
import Link from "next/link";
import Layout from "../components/Layout";
import { connectToDatabase } from "../utils/mongodb";

type Props = {
  isConnected: boolean;
};
const IndexPage = ({ isConnected }: Props) => (
  <Layout title="Home | Next.js + TypeScript Example">
    <h1>Main page for todo demo</h1>
    <p>isConnected={isConnected.toString()}</p>
  </Layout>
);

export default IndexPage;

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const { client } = await connectToDatabase();

  const isConnected = await client.isConnected();

  return {
    props: { isConnected },
  };
};
