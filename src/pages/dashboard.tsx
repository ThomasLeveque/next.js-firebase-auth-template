import React from 'react';
import { NextPage } from 'next';

import Layout from '@components/layout';

type DashboardProps = {};

const Dashboard: NextPage<DashboardProps> = () => {
  return (
    <Layout>
      <h1 className="text-5xl">Dashboard</h1>
    </Layout>
  );
};

export default Dashboard;
