import { GetServerSideProps, NextPage } from 'next';

export const getServerSideProps: GetServerSideProps = async () => ({
  redirect: {
    destination: '/docs/foo',
    permanent: false,
  },
});

const Page: NextPage = () => <div>Redirecting...</div>;

// eslint-disable-next-line import/no-default-export
export default Page;
