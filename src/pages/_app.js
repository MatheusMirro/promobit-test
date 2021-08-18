import React from 'react';
import { ThemeProvider } from 'styled-components';
import Head from 'next/head';
import Layout from '../components/Layout';
import GlobalStyles from '../styles/global';
import theme from '../styles/theme';
import PropTypes from 'prop-types';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Promobit Movies</title>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <GlobalStyles />
    </ThemeProvider>
  )
}

MyApp.propTypes = {
  pageProps: PropTypes.shape({}),
  Component: PropTypes.elementType
};

export default MyApp;
