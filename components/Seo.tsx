import Head from 'next/head';

interface seoComponentProps {
  title: string;
}
export default function Seo({ title }: seoComponentProps) {
  return (
    <Head>
      <title> {title} | Next Movies </title>
    </Head>
  );
}
