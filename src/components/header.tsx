import React from 'react';
import Link from 'next/link';

import { signOut } from '@libs/auth';

const Header: React.FC = () => {
  const handleSignOut = () => {
    signOut();
  };

  return (
    <header className="py-3 px-6 flex justify-end">
      <Link href="/dashboard">
        <a className="p-2">Dashboard</a>
      </Link>
      <Link href="/account">
        <a className="p-2">Account</a>
      </Link>
      <button className="p-2" onClick={handleSignOut}>
        Logout
      </button>
    </header>
  );
};

export default Header;
