import styled from '@emotion/styled';
import * as React from 'react';
import {stopWatchTime} from './utils/stopWatchTime';

interface IProps {seconds: number}
const Time:React.FC<IProps>=({seconds})=>{
    return <Container>{stopWatchTime(seconds)}</Container>
}
// const Container = styled.div`
//     color:white;
//     font-size:80px;
//     flex:1;

//     display: flex;
//     justify-content : center;

const Container = styled.div`
  color: white;
  font-size: 60px;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export default Time;