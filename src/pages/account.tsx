import React from 'react';
import { NextPage } from 'next';

import Layout from '@components/layout';
import { useAuth } from '@hooks/useAuth';

type AccountProps = {};

const Account: NextPage<AccountProps> = () => {
  const { user } = useAuth();

  return (
    <Layout>
      <h1 className="text-5xl">Account</h1>
      <h2 className="text-3xl">Name: {user?.displayName}</h2>
      <h3 className="text-xl">Email: {user?.email}</h3>
    </Layout>
  );
};

export default Account;
