# Stopwatch Project

## TODO
[ ] View만들기
- [*] Time만들기
- [ ] Controllers만들기
- [ ] Laps만들기

[ ] Hooks만들기
- [ ] 상태추가: seconds, status, laps 
- [ ] 파생상태추가: nextLap
- [ ] 로직 추가: start, stop, reset, record

[ ] Styling - emotion
-https://emotion.sh
- npm i @emotion/styled @emotion/react
- import styled from '@emotion/styled'
- typescript에서 사용할 경우
tsconfig.json에 추가 "jsxImportSource": "@emotion/react"

## Requires
- 0.01초 마다 카운트 된다.
- 4가지 버튼이 있다(시작, 중지, 기록, 초기화)
- 버튼을 눌러 기록을 남길 수 있다.
- 기록된 시간을 목록에 보여준다.
- 화면을 시, 분, 초로 나눈다.