import * as React from 'react';
import {STATUS} from './hooks/useStopwatch'; //export default로 설정된게 아니라서 {STATUS}로 설정

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
        <div>
            {
                state===STATUS.PROCESSING ?
                <div>
                    <button onClick={record}>랩</button>
                    <button onClick={stop}>정지</button>
                </div>
                :
                <div>
                    <button onClick={reset}>초기화</button>
                    <button onClick={start}>시작</button>
                </div>
            }
        </div>
    );
}

export default Controllers;