import NavBar from '../components/NavBar';

// index.js 자체가 home
export default function Home() {
  // react.js를 프론트엔드 안에서 실행하는 것을 hydration이라고 부른다

  return (
    <div>
      <h1> Hello </h1>
    </div>
  );
}
//react 는 client side rendering -> react.js를 가져 와서 읽어 온다
// 개발자 도구에서 root만 보여지고 자바스크립트에 모든 html 코드가 숨겨져 있음

// next js 는 server side rendering 개발자 도구에서 html태그가 보여 진다
//js 가 비활성화 되어도 html 렌더링을 할 수 있으며 빈 화면으로 출력되지 않는다
// 프리렌더링 된다 그렇다고 기능이 작동되는 것이 아님을 유의하자
// html을 프리렌더링 하여 빈화면을 출력하지만 않는다는 것을 기억
// 장점은? seo 노출에 굉장히 좋고 검색엔진이 잘 되며 유저에게도 좋다
