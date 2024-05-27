import * as React from 'react';
import {INTERVAL, MILLISEC_PER_SECOND} from '../contants'
export enum STATUS {
    PROCESSING,
    STOP,
}
export interface ILap{
    id : number;
    title : string;
    seconds : number;
}
interface IUseStopwatchReturnType{
    seconds : number;
    status : STATUS;
    start : ()=>void;
    stop : ()=>void;
    reset : ()=>void;
    record : ()=>void;
}
const useStopwatch = ()=>{
    const [seconds, setSeconds] = React.useState(0);
    const [status, setStatus] = React.useState<STATUS>(STATUS.PROCESSING);
    const [laps, setLaps] =React.useState<ILap[]>([]);

    //콜백이용해서 성능높이기
    //리턴값이 함수면 콜백, 리턴값이 그냥 데이터였으면 유스메모
    //한번만 값이 저장되고 계속 사용하게
    //[]: 의존성, 여기에 설정된 값이 변경될때 다시 계산
    const start = React.useCallback(()=>{},[]);
    const stop = React.useCallback(()=>{},[]);
    const reset = React.useCallback(()=>{},[]);
    const record = React.useCallback(()=>{},[]);

    //window.setInterval(함수, 간격); 얼마 간격으로 함수를 실행하겠다
    window.setInterval(함수, MILLISEC_PER_SECOND); 
    return {seconds, status, laps, start, stop, reset, record};
}
export default useStopwatch;