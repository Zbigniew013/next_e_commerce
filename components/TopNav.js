import Link from 'next/link';
import { useSession, signOut } from 'next-auth/react';

const TopNav = () => {
  const { data, status } = useSession();
  console.log(data, status);

  return (
    <nav className='nav shadow p-2 justify-content-between mb-3'>
      <Link href='/' className='nav-link'>
        🛒 NEXTECOM
      </Link>

      {status === 'authenticated' ? (
        <div className='d-flex'>
          <Link className='nav-link' href='/dashboard/user'>
            {data?.user.name}
          </Link>

          <a
            className='nav-link pointer'
            onClick={() => signOut({ callbackUrl: '/login' })}
          >
            Logout
          </a>
        </div>
      ) : status === 'loading' ? (
        <a className='nav-link text-danger'>Loading</a>
      ) : (
        <div className='d-flex'>
          <Link href='/login' className='nav-link'>
            Login
          </Link>
          <Link href='/register' className='nav-link'>
            Register
          </Link>
        </div>
      )}
    </nav>
  );
};

export default TopNav;
