import React from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import 'firebase/firestore';
import 'firebase/auth';
import { FuegoProvider } from '@nandorojo/swr-firestore';
import { fuego } from '@libs/fuego';

import AuthProvider from '@hooks/useAuth';
import AuthLoading from '@components/auth-loading';

import '../../styles/index.css';

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <FuegoProvider fuego={fuego}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AuthProvider>
        <AuthLoading>
          <Component {...pageProps} />
        </AuthLoading>
      </AuthProvider>
    </FuegoProvider>
  );
};

export default MyApp;
