import { Inter } from 'next/font/google';
import '../styles/globals.css';
import '../styles/3d-transforms.css';
import { ThemeProvider } from '../components/ThemeProvider';
import ErrorBoundary from '../components/ErrorBoundary';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'] });

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <ErrorBoundary>
        <main className={inter.className}>
          {/* Google Analytics Placeholder - Replace GA_MEASUREMENT_ID with your actual ID */}
          {/* 
          <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"/>
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'GA_MEASUREMENT_ID');
            `}
          </Script> 
          */}
          <Component {...pageProps} />
        </main>
      </ErrorBoundary>
    </ThemeProvider>
  );
}