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

  // Устанавливаем тему
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', 'nord');
  }, []);

  // Google Analytics
  useEffect(() => {
    const script = document.createElement('script');
    script.async = true;
    script.src = "https://www.googletagmanager.com/gtag/js?id=AW-16964397746";
    document.head.appendChild(script);

    const gtagScript = document.createElement('script');
    gtagScript.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'AW-16964397746');
    `;
    document.head.appendChild(gtagScript);
  }, []);

  // Yandex.Metrika
  useEffect(() => {
    const yandexScript = document.createElement('script');
    yandexScript.type = 'text/javascript';
    yandexScript.innerHTML = `
      (function(m,e,t,r,i,k,a){
        m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
        m[i].l=1*new Date();
        for (var j = 0; j < document.scripts.length; j++) {
          if (document.scripts[j].src === r) { return; }
        }
        k=e.createElement(t),a=e.getElementsByTagName(t)[0],
        k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
      })(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

      ym(100834907, "init", {
          clickmap:true,
          trackLinks:true,
          accurateTrackBounce:true,
          webvisor:true
      });
    `;
    document.head.appendChild(yandexScript);
  }, []);

  // Загрузка при смене маршрута
  useEffect(() => {
    const handleStart = () => setLoading(true);
    const handleComplete = () => setLoading(false);

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);

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
      <noscript>
        <div>
          <img src="https://mc.yandex.ru/watch/100834907" style={{ position: 'absolute', left: '-9999px' }} alt="" />
        </div>
      </noscript>
    </>
  );
}

export default MyApp;
