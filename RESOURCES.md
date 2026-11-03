# 풀스택 웹 개발 Resources

## Knowledge

### 웹 기초 (HTTP)
- [MDN: An overview of HTTP](https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Overview)
  HTTP의 클라이언트-서버 모델, 요청과 응답의 구조, 무상태성을 다루는 표준 입문서다. 프론트엔드와 백엔드가 어떻게 대화하는지 다룰 때 근거로 쓴다. (2026-11-03 내용 확인)
- [MDN: HTTP response status codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status)
  상태 코드 5개 그룹과 각 코드의 의미를 정리한 문서로, RFC 9110을 따른다. API가 어떤 응답을 돌려줘야 하는지 정할 때 쓴다. (2026-11-03 내용 확인)

### 백엔드 (ASP.NET Core, .NET 10)
- [Microsoft Learn: ASP.NET Core fundamentals overview](https://learn.microsoft.com/en-us/aspnet/core/fundamentals/)
  공식 개념 지도다. Program 파일, DI, Middleware, Host, Configuration, Routing, Logging을 다룬다. 백엔드 커리큘럼의 뼈대로 쓴다. (2026-11-03 내용 확인)
- [Microsoft Learn: Tutorial: Create a Minimal API](https://learn.microsoft.com/en-us/aspnet/core/tutorials/min-web-api)
  .NET 10 기준 공식 튜토리얼이다. MapGet, MapPost, MapPut, MapDelete로 Todo API를 만들고, Results와 TypedResults, EF Core InMemory를 쓴다. 첫 백엔드 실습에 쓴다. (2026-11-03 내용 확인)

### 프론트엔드와 백엔드 연결
- [Microsoft Learn: Create an ASP.NET Core app with React](https://learn.microsoft.com/en-us/visualstudio/javascript/tutorial-asp-net-core-with-react)
  Vite React 클라이언트와 ASP.NET Core 서버를 별도 프로젝트로 두는 공식 템플릿이다. Vite proxy로 `/weatherforecast` 요청을 백엔드에 넘기는 방법을 다룬다. 두 프로젝트를 연결하는 수업에 쓴다. (2026-11-03 내용 확인)

### 프론트엔드 (아직 내용 검토 전, 공식 문서)
- [react.dev: Learn](https://react.dev/learn): React 공식 학습 문서
- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html): TypeScript 공식 핸드북
- [Vite Guide](https://vite.dev/guide/): Vite 공식 가이드
- [Tailwind CSS Docs](https://tailwindcss.com/docs): Tailwind 공식 문서
- [shadcn/ui Docs](https://ui.shadcn.com/docs): shadcn/ui 공식 문서

## Wisdom (Communities)
- [r/dotnet](https://www.reddit.com/r/dotnet/): .NET 생태계 전반을 다루는 대형 커뮤니티다. 설계 질문이나 라이브러리 선택을 물어볼 때 쓴다.
- [r/reactjs](https://www.reddit.com/r/reactjs/): React 커뮤니티다. 프론트엔드 구조에 대한 질문에 쓴다.

## Gaps
- 한국어 .NET/React 커뮤니티 중 신뢰할 만한 곳을 아직 찾지 못했다
- 인증(ASP.NET Core Identity, JWT), 배포 관련 자료는 해당 수업에 들어가기 전에 조사한다
- 프론트엔드 공식 문서는 링크만 있고, 수업 전에 내용을 검토해야 한다
