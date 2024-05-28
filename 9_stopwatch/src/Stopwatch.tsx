import * as React from 'react';
import Time from "./time";
import Controllers from './controllers';
import Laps from './Laps';
import useStopwatch from './hooks/useStopwatch';
import styled from '@emotion/styled';

const Stopwatch:React.FC = () => {
    const {seconds, status, laps, start, stop, reset, record, nextLap} = useStopwatch();
    return (
       
    <IPhone>
        <Screen>
            <Time seconds={seconds}/>
            <Controllers state={status} 
                record={record} 
                start={start} 
                stop={stop}
                reset={reset}
                />
            <Laps nextLap={nextLap} laps={laps}/>
        </Screen>
    </IPhone>   
    )
}
const IPhone = styled.div`
    width: 400px;
    height: 800px;
    border-radius: 30px;

    backround-color: #fbfbfd
    padding: 20px;
    box-shadow: 7px 7px 10px rgba(0, 0, 0, 0.4),
    inset -5px -5px 15px rgba(0, 0, 0, 0.2),
    inset 2px 0px 15px rgba(0, 0, 0, 0.2);
`
const Screen = styled.div`
    background-color: black;
    height: 100%;
    width: 100%;
    border-radius: 30px;
    overflow: hidden;

    display:flex;
    flex-direction: column;
    justify-content: stretch;
    align-items: stretch;
`
export default Stopwatch;