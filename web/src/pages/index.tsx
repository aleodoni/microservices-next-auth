import { getSession, withPageAuthRequired } from '@auth0/nextjs-auth0';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  return null;
};

export default Home;

export const getServerSideProps = withPageAuthRequired({
  async getServerSideProps({ req, res }) {
    const session = getSession(req, res);

    if (!session) {
      return {
        redirect: {
          destination: '/api/auth/login',
          permanent: false,
        },
      };
    } else {
      return {
        redirect: {
          destination: '/app',
          permanent: false,
        },
      };
    }
  },
});
