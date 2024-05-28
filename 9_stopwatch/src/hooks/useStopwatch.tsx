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
    lapTime: number;
}
interface IUseStopwatchReturnType{
    seconds : number;

    status : STATUS;
    start : ()=>void;
    stop : ()=>void;
    reset : ()=>void;
    record : ()=>void;

    nextLap : ILap; //최상단의 기록
    laps : ILap[]; //과거의 기록
}
const useStopwatch = ()=>{
    const [seconds, setSeconds] = React.useState(0);
    const [status, setStatus] = React.useState<STATUS>(STATUS.PROCESSING);
    const [laps, setLaps] =React.useState<ILap[]>([]);
    
    // const nextLapv: ILap = {
    //     id: laps.length+1,
    //     title: "Lap",
    //     seconds: seconds,
    //     lapTime: seconds-(laps[0]?.seconds ?? 0) //seconds값이 0이면 
    // }
    //useMemo를 사용하면 기능은 달라지지 않지만, 성능이 향상됨
    const nextLap = React.useMemo<ILap>(()=>{
        return{
            id: laps.length+1,
            title: "Lap",
            seconds: seconds,
            lapTime: seconds-(laps[0]?.seconds ?? 0) 
            //laps[0]?.seconds: 옵셔널 체이닝을 사용하여 laps[0]이 존재하면 그 seconds 값을 가져오고, 존재하지 않으면 undefined를 반환
            //laps[0]?.seconds ?? 0: 널 병합 연산자를 사용하여 laps[0]?.seconds가 undefined이거나 null이면 0을 반환하고, 
            //그렇지 않으면 laps[0]?.seconds의 값을 반환
        }
    },[seconds, laps])
    //콜백이용해서 성능높이기, 불필요한 계산 줄이기!
    //리턴값이 함수면 콜백, 리턴값이 그냥 데이터였으면 유스메모
    //한번만 값이 저장되고 계속 사용하게
    //[]: 의존성, 여기에 설정된 값이 변경될때 다시 계산

    const start = React.useCallback(()=>{
        if(status !== STATUS.STOP){
            return
        }
        setStatus(STATUS.PROCESSING)
    },[status]);//status값이 변경될 때 함수 실행

    const stop = React.useCallback(()=>{
        if(status !== STATUS.PROCESSING){
            return
        }
        setStatus(STATUS.STOP)
    },[status]);

    const reset = React.useCallback(()=>{
        if(status !== STATUS.STOP){
            return
        }
        setSeconds(0); //0으로 만들어서 리셋시킴
        setLaps([]); //빈배열로 만들어서 리셋시킴
    },[status]);
    
    const record = React.useCallback(()=>{
        if(status !== STATUS.PROCESSING){
            return;
        }
        setLaps((prev)=>{return [nextLap, ...prev]}) 
        //기존의 랩을 가져온다.
       
    },[status, nextLap]);

    //useEffect()는 클린업 기능이 있음
    //status가 변경될 때 타이머를 정리하는 역할
    //useEffect는 React에서 사이드 이펙트를 처리하기 위해 사용되는 훅
    React.useEffect(()=>{
        let intervalId: number; //계속 변하는 변수이기 때문에 if문 바깥에 변수 선언
        if(status === STATUS.PROCESSING){ //상태가 진행중일때
            //window.setInterval(함수, 간격); 얼마 간격으로 함수를 실행하겠다
            intervalId = window.setInterval(()=>setSeconds((prev)=>prev+INTERVAL/MILLISEC_PER_SECOND), INTERVAL); 
        }
        return ()=>{
           clearInterval(intervalId);
        }
    },[status])

    

    
    return {seconds, status, laps, start, stop, reset, record, nextLap};
}

export default useStopwatch;