import Head from 'next/head';

import { AuthProvider } from '../contexts/AuthContext';
import '../styles/main.scss';

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Head>
        <title>Memes World</title>
      </Head>
      <Component {...pageProps} />;
    </AuthProvider>
  );
}

export default MyApp;
