import Layout from '../components/Layout';
import Selectbox from '~/components/Selectbox';

const GeneratePage = () => {
  return (
    <Layout>
      <h1 className="mt-4 text-8xl font-display text-center text-sub">
        Generate
      </h1>
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
};

export default GeneratePage;
