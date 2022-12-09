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

type Params = {
  params: {
    id: string;
  };
};

export const getServerSideProps = async ({ params }: Params) => {
  const { id } = params;
  return {
    props: {
      id,
    },
  };
};
