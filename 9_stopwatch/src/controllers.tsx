import * as React from 'react';
import {STATUS} from './hooks/useStopwatch'; //export default로 설정된게 아니라서 {STATUS}로 설정
import styled from '@emotion/styled';
import Button from './utils/Button';

//랩 정지, 초기화 시작: 토글
interface IProps {
    state : STATUS;
    record : ()=>void;
    stop : ()=>void;
    start : ()=>void;
    reset : ()=>void;
}

const Controllers:React.FC<IProps>=({state, record, stop, start, reset})=>{
    return(
        <Container>
            {
                state===STATUS.PROCESSING ?
                <>
                    <div>
                        <Button type="NORMAL" onClick={record}>랩</Button>
                        <Button type="ERROR" onClick={stop}>정지</Button>
                    </div>
                </>
                :
                <>
                    <div>
                        <Button type="NORMAL" onClick={reset}>초기화</Button>
                        <Button type="SUCCESS" onClick={start}>시작</Button>
                    </div>
                </>
            }
        </Container>
    );
}
//  const Container=styled.div`
//     flex: none;
//     display: float;
//     padding 30px;
//     flex-direction: column;
//     justify-content: space-between;

//     border-bottom: 1px solid #fff;
//  `
const Container = styled.div`
  flex: none;

  display: flex;
  padding: 30px;
  justify-content: space-between;
  align-items: center;

  border-bottom: 1px solid #fff;
`;
export default Controllers;