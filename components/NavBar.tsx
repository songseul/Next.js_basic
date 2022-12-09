import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

export default function NavBar() {
  const route = useRouter();

  return (
    <nav>
      <img src="/vercel.svg" />
      <div>
        <Link href="/">
          <span className={route.pathname === '/' ? 'active' : ''}>Home</span>
        </Link>
        <Link href="/about">
          <span className={route.pathname === '/about' ? 'active' : ''}>
            About
          </span>
        </Link>
      </div>
      {/*  style jsx는 해당 컴포넌트 스코프만 한정 되어 있기 때문에 다른 파일과 컴포넌트에 영향을 주지 않는다 심지어
      같은 클래스를 사용한다고 해도 서로의 클래스는 랜덤으로 바뀌어 적용 되기 떄문에 클래스를 복수로 사용해도 충돌 하지 않는다 */}
      <style jsx>{`
        span {
          text-decoration: none;
        }
        nav {
          background-color: #fff;
          display: flex;
          gap: 10px;
          flex-direction: column;
          align-items: center;
          padding-top: 20px;
          padding-bottom: 10px;
          box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
            rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
        }
        img {
          max-width: 100px;
          margin-bottom: 5px;
        }
        nav span {
          font-weight: 600;
          font-size: 18px;
        }
        .active {
          color: tomato;
        }
        nav div {
          display: flex;
          gap: 10px;
        }
      `}</style>
    </nav>
  );
}

/** 클래스로 스타일 적용하는 방법 1 
 <Link
href="/"
className={`${styles.link} ${
  route.pathname === '/' ? styles.active : ''
}`}
>

<Link
        href="/about"
        className={[
          styles.link,
          route.pathname === '/about' ? styles.active : '',
        ].join('')}
      >
 */
