# Next.js 환경설정하기
> 여려 환경세팅을 조합하여 나만의 세팅 만들기

## 개발 모드로 실행하기
`$ npm dev`
// or
`$ npm run dev`
// if, using yarn
`$ yarn dev`

> http://localhost:3000

## package.json의 script 살펴보기
```
{
	"scripts": {
    	"test": "echo \"Error: no test specified\" && exit 1",
	    // webpack-dev-server 로 가동
	    "dev": "next dev",
	    // 프로젝트를 빌드하여 .next폴더 생성
	    "build": "next build",
	    // 빌드된 .next를 기준으로 서버를 가동한다.
	    "start": "next start",
	    // html 파일을 내보내기 해준다.
	    "export": "next export"
        }
}
```

## pages 폴더 분석
`next.js`에서 pages 폴더는 라우터 기능을 한다. 따라서 **모든 기능과 페이지들은 pages 디렉토리 안으로 들어가 있어야 한다.**


pages/index.js에서 각 폴더 명을 주소로 인식하고, 폴더 내 파일명이 파일 라우팅 경로가 된다.
ex)
`http://localhost:3000/` => pages/index.js
`http://localhost:3000/about` => pages/about.js
`http://localhost:3000/product` => pages/product/index.js
`http://localhost:3000/product/detail` => pages/product/detail.js

## _document.js 역할
- 스타일시트 링크
- 폰트 임포팅
- 도큐먼트 기본 설정... meta/link

루트 경로가 되는 파일은 index.html이다. next 초기 설정에서는 index.html을 볼 수 없다. next에서는 이 역할 을 _document.js가 하게 된다. head에 초기 설정을 하거나, 스타일시트 링크를 연결하거나, 포트 임포팅, 그 밖에 link, import 등등을 넣어준다. 서버 사이드 렌더링이 되면서 css가 깨져서 보이는 문제를 해결하기 위해 초기값을 세팅해줘야 하는데 이것을 _document.js를 통해 한다.

```
// page/_documnet.js
import Document, { Head, Main, NextScript } from 'next/document';
import React from 'react';

export default class MyDocument extends Document {
  render() {
    return (
      <html>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          // 여기에 폰트 임포팅
          // 여기에 공통 CSS e.g.reset-css/common.css
        </Head>
        <body>
          <div id="root">
            <Main />
            <NextScript />
          </div>
        </body>
      </html>
    );
  }
}
```