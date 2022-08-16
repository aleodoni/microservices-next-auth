import { useUser, withPageAuthRequired } from '@auth0/nextjs-auth0';
import Link from 'next/link';

export default function Home() {
  const { user } = useUser();

  return (
    <>
      <h1>Hello World</h1>
      <pre>{JSON.stringify(user, null, 2)}</pre>

      <Link href="/api/auth/logout">
        <a>Logout</a>
      </Link>
    </>
  );
}

export const getServerSideProps = withPageAuthRequired();
