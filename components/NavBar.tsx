import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import styles from './NavBar.module.css';

export default function NavBar() {
  const route = useRouter();
  console.log(route);

  return (
    <nav>
      <Link href="/">
        <span className={route.pathname === '/' ? 'active' : ''}>Home </span>
      </Link>
      <Link href="/about">
        <span className={route.pathname === '/about' ? 'active' : ''}>
          About
        </span>
      </Link>
      {/*  style jsx는 해당 컴포넌트 스코프만 한정 되어 있기 때문에 다른 파일과 컴포넌트에 영향을 주지 않는다 심지어
      같은 클래스를 사용한다고 해도 서로의 클래스는 랜덤으로 바뀌어 적용 되기 떄문에 클래스를 복수로 사용해도 충돌 하지 않는다 */}
      <style jsx>{`
        nav {
          background-color: lightgray;
        }
        span {
          font-size: 2rem;
          font-weigth: 400;
        }
        .active {
          color: yellow;
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
