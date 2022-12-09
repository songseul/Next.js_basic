import { GetServerSideProps } from 'next';
import { InferGetServerSidePropsType } from 'next';
import Seo from '../../components/Seo';
export default function Detail({
  id,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const [title, idNum] = id || [];

  return (
    <div>
      <Seo title={title} />
      <h4> {title || 'loading...'}</h4>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async ({
  params: { id },
}) => {
  return {
    props: {
      id,
    },
  };
};
