# 나와 가장 잘 맞는 레븐 멤버는? (레븐 미니게임)
5개의 질문을 통해 나와 가장 잘 맞는 레븐 멤버를 찾아보는 간단한 미니게임

[https://minigame.leaven.team](https://minigame.leaven.team)

## 제작동기 및 제작과정
간단한 설문형 게임이나 유사 mbti 검사들이 netlify 등으로 배포되어 많은 호응을 얻고 있는 것에 착안해, 간단하게 질문형 미니게임을 만들어보고자 계획하였다. 기술적으로는 이전에 사용해본 적이 없던 Next.js와 Vercel을 통한 배포과정, 그리고 Tailwind CSS 기반의 Daisy UI를 적용하였다.

우선 질문과 답변을 만들고, 각 답변에 대한 멤버별 가중치를 설계하였다. ([관련문서](https://docs.google.com/document/d/1f6pWSB4MS_zczUiEzHbigZq6-sQQQyCFH4e7z5dVJ1E/edit?usp=sharing)) 이후 최대한 빠르게 주요 기능을 개발하였다.

## Tech Stack
- Next.js (SSR) with Vercel
- Daisy UI (Tailwind CSS)
- Sentry (Error Monitoring)

## 향후 개선사항
- 하드코딩되어있는 결과산출과정 개선
- 범용적으로 사용할 수 있도록 개선
- 중복코드 컴포넌트로 분리
