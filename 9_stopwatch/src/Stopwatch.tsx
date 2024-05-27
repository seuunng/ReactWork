import * as React from 'react';
import Time from "./time";
import Controllers from './controllers';
import Laps from './Laps';
import useStopwatch from './hooks/useStopwatch';

const Stopwatch:React.FC = () => {
    const {seconds, status, laps, start, stop, reset, record} = useStopwatch();
    return (
    <div>
        <Time seconds={seconds}/>
        <Controllers state={status} 
            record={record} 
            start={start} 
            stop={stop}
            reset={reset}/>
        <Laps nextLap={{title: 'test', id:1, seconds:0}} laps={laps}/>
    </div>    
    )
}

export default Stopwatch;