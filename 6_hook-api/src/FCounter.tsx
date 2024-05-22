//import * as React from 'react';
import React, { ReactElement, useState, useEffect } from 'react';
import FCounterDisplay from './FCounterDisplay';

interface CounterProps {
    title: string,
    num: number,
}
// interface CounterState {
//     num: number;
//     hideCount : boolean;
// }
//클래스를 함수로 변경
function FCounter(props:CounterProps):ReactElement {
    const[counter, setCounter]=useState(0)
    const[hideCount, setHideCount]=useState(false)

    const plus = ()=>{
        setCounter(counter+1)
    }  
    const minus = ()=>{
        setCounter(counter-1)
    }
    const toggle = ()=>{
        setHideCount(!hideCount)
    }
    useEffect(()=>{
        console.log("[Rendered] Counter/useEffect")
    })
    useEffect(()=>{
        console.log("[Rendered] Counter/useEffect")
    })
    return(
        <div>
            <h1>{props.title}{props.num}</h1>
            <h3>Count: {counter}</h3>
                {!hideCount && <FCounterDisplay counter = {counter} />}
                {/* 조건부렌더링 this.state.hideCount 이 조건이 false일때만 <CounterDisplay>를 렌더닝*/}
            <button onClick={plus}>Plus</button>
            <button onClick={minus}>Minus</button>
            <button onClick={toggle}>Toggle Count</button>
        </div>
        )
    }
    

export default FCounter;