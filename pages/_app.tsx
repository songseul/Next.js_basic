//components 청사진 파일 _app
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '../components/Layout';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>

      <style jsx global>{`
        a {
          color: tomato;
        }
      `}</style>
    </>
  );
}
