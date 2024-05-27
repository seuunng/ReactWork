import * as React from 'react';
import { ILap } from './hooks/useStopwatch';

interface IProps {
    nextLap : ILap;
    laps : ILap[];
}

const Laps:React.FC<IProps>=({nextLap, laps})=>{
    return(
        <div>
            <div>{nextLap.title} with {nextLap.seconds}</div>
            {
                //반복문
                laps.map((lap, index)=>{
                    return(
                        <div key={lap.id}>{lap.title}with {nextLap.seconds}</div>
                    )
                })
            }
        </div>
    );
}

export default Laps;