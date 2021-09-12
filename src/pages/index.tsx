import Layout from '~/components/Layout';
import Link from 'next/link';

const IndexPage = () => {
  const ideaItem = [
    { name: 'Color' },
    { name: 'Arlene Mccoy' },
    { name: 'Devon Webb' },
    { name: 'Tom Cook' },
    { name: 'Tanya Fox' },
    { name: 'Hellen Schmidt' },
  ];

  return (
    <Layout title="Home | Next.js + TypeScript Example">
      <h1 className="mt-4 text-8xl font-display text-center text-sub">
        Idea Generator
      </h1>
      <div className="mt-8 flex justify-center">
        <div className="w-54 h-54 p-8 rounded-full bg-yellow-50 shadow">
          <svg
            className="w-40 h-40 text-yellow-300 transform rotate-12"
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="currentColor"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7zm2.85 11.1l-.85.6V16h-4v-2.3l-.85-.6C7.8 12.16 7 10.63 7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.63-.8 3.16-2.15 4.1z" />
          </svg>
        </div>
      </div>
      <div className="mt-4 flex justify-center">
        <p className="text-sub text-2xl">
          Why not randomly cross items from
          <br />
          the two genres to create new ideas?
        </p>
      </div>
      <div className="mt-8 flex justify-center">
        <Link href="/generate">
          <a
            href="/generate"
            className="py-3 px-5 rounded bg-yellow-500 text-white hover:bg-opacity-80 transition duration-300 font-bold tracking-wider text-lg"
          >
            Let's Generate!!
          </a>
        </Link>
      </div>
    </Layout>
  );
};

export default IndexPage;
