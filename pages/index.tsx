import { InferGetServerSidePropsType } from 'next';
import Seo from '../components/Seo';
import { useRouter } from 'next/router';
// index.js 자체가 home
export default function Home({
  results,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  // react.js를 프론트엔드 안에서 실행하는 것을 hydration이라고 부른다
  const router = useRouter();

  interface movieResults {
    [key: string]: string | number;
  }

  const clickDetail = (id: number | string, title: number | string) => {
    router.push(
      {
        pathname: `/movies/${title}/${id}`,
        query: {
          title,
        },
      },
      `/movies/${title}/${id}`
    );
  };

  return (
    <div className="container">
      <Seo title="Home" />

      {results?.map((movie: movieResults) => (
        <div
          className="movie"
          key={movie.id}
          onClick={() => clickDetail(movie.id, movie.original_title)}
        >
          <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
          <h4>{movie.original_title}</h4>{' '}
        </div>
      ))}
      <style jsx>{`
        .container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          padding: 20px;
          gap: 20px;
        }
        .movie {
          cursor: pointer;
        }
        .movie img {
          max-width: 100%;
          border-radius: 12px;
          transition: transform 0.2s ease-in-out;

          box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
        }
        .movie:hover img {
          transform: scale(1.05) translateY(-10px);
        }
        .movie h4 {
          font-size: 18px;
          text-align: center;
        }
      `}</style>
    </div>
  );
}

// 서버에서 하는일
export async function getServerSideProps() {
  const { results } = await (
    await fetch(`http://localhost:3000/api/movies`)
  ).json();
  return {
    props: {
      results,
    },
  };
}

//react 는 client side rendering -> react.js를 가져 와서 읽어 온다
// 개발자 도구에서 root만 보여지고 자바스크립트에 모든 html 코드가 숨겨져 있음

// next js 는 server side rendering 개발자 도구에서 html태그가 보여 진다
//js 가 비활성화 되어도 html 렌더링을 할 수 있으며 빈 화면으로 출력되지 않는다
// 프리렌더링 된다 그렇다고 기능이 작동되는 것이 아님을 유의하자
// html을 프리렌더링 하여 빈화면을 출력하지만 않는다는 것을 기억
// 장점은? seo 노출에 굉장히 좋고 검색엔진이 잘 되며 유저에게도 좋다
