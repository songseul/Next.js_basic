# nextJs 영화 어플리케이션 미니 프로젝트

## 어플리케이션 실행 방법 입니다.

---

index.js 파일의 getServerSideProps 함수 fetch 요청 주소를

- 접속하는 주소로 바꿔 주세요 (localhost:3000)
- https://www.themoviedb.org/ 에 가입하여 api 키를 발급 받아 주세
- .env 파일을 전역에 생성
- NEXT_PUBLIC_API_KEY = KMDB에서 발급 받은 고유의 api
- npm run dev
- 어플리케이션을 실행 할수 있습니다

---

## 인기 영화 정보를 받아와 상세페이지를 구현

```
쿼리 파라미터를 배열값으로 1개 이상 받아와서 상세페이지에서 사용 할수 있습니다.
Seo 컴포넌트를 만들어 상세 페이지별 영화 이름을 동적 title로 바뀌게 할 수 있습니다.
getServerSideProps와 next.config.js reWrite함수를 통해 접속하는 주소 (source)를
개발자가 원하는 주소(destination)로 우회하여 ssr로 data fetch를 요청 합니다.
404페이지를 pages 폴더안에 파일로 생성하여 원하는 ui로 변경 할 수 있습니다.
```
