import React from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import 'firebase/firestore';
import 'firebase/auth';

import AuthProvider from '@hooks/useAuth';
import AuthLoading from '@components/auth-loading';

import '../../styles/index.css';

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AuthProvider>
        <AuthLoading>
          <Component {...pageProps} />
        </AuthLoading>
      </AuthProvider>
    </>
  );
};

export default MyApp;
