import * as React from 'react';
import { ILap } from './hooks/useStopwatch';
import styled from '@emotion/styled';

interface IProps {
    nextLap : ILap;
    laps : ILap[];
}

const Laps:React.FC<IProps>=({nextLap, laps})=>{
    return(
        <Container>
            <Box>
                <span>{nextLap.title}</span>
                <span>{nextLap.lapTime}</span>
            </Box>
            {
                //반복문
                laps.map((lap)=>{
                    return(
                        <div key={lap.id}>
                            <Box>
                                <span>{lap.title}</span>  
                                <span>{lap.lapTime}</span>
                            </Box>
                        </div>
                    )
                })
            }
        </Container>
    );
}

const Container=styled.div`
    flex: 1;  // 균형있게 배치하기위한 설정

    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: stretch;
    overflow: auto;

    color: white;
`

const Box = styled.div`
    display: flex;
    color: white;
    font-size: 24px;

    padding: 20px;

    align-items: center;
    justify-content: space-between;
`
export default Laps;