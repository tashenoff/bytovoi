// pages/_app.js
import '../styles/globals.css';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import LoadingSpinner from '../components/LoadingSpinner';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { useRouter } from 'next/router';

config.autoAddCss = false;

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  // Устанавливаем theme на nord
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', 'nord');
  }, []);

  // Отслеживание маршрутов и управление состоянием загрузки
  useEffect(() => {
    const handleStart = () => setLoading(true);
    const handleComplete = () => setLoading(false);

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);

    // Удаляем обработчики событий при размонтировании
    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleComplete);
      router.events.off('routeChangeError', handleComplete);
    };
  }, [router.events]);

  return (
    <>
      <Head>
        <link 
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap" 
          rel="stylesheet" 
        />
      </Head>
      {loading ? <LoadingSpinner /> : <Component {...pageProps} />}
    </>
  );
}

export default MyApp;
