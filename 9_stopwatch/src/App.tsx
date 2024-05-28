import React from 'react';
import {reset} from './reset'
import Stopwatch from './Stopwatch';
import { Global } from '@emotion/react';
import styled from '@emotion/styled';


function App() {
  return (
    <Container>
      <Global styles={reset}/> {/* 전역변수로 사용하기 위한 태그: Global */}
      <Stopwatch/>
    </Container>
  );
}
//컨테이너라는 이름에 스타일을 지정하고 컴포넌트처럼 태그로 사용
const Container = styled.div`
  position : absolute;
  left : 50%;
  right : 50%;
  translate : translate(-50%, -50%);
`
export default App;
