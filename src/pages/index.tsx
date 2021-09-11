import Link from 'next/link';
import Layout from '../components/Layout';
import Selectbox from '~/components/Selectbox';

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <h1 className="mt-4 text-8xl font-display text-center text-sub">
      Idea Generator
    </h1>
    <div className="mt-8 flex justify-center">
      <img src="/idea.svg" alt="idea logos" />
    </div>
    <div className="mt-4 flex justify-center">
      <p className="text-sub text-2xl">
        Why not randomly cross items from
        <br />
        the two genres to create new ideas?
      </p>
    </div>
    <div className="mt-4 flex justify-center">
      <div className="w-full max-w-xs">
        <Selectbox />
      </div>
      <div className="ml-4 w-full max-w-xs">
        <Selectbox />
      </div>
    </div>
  </Layout>
);

export default IndexPage;
