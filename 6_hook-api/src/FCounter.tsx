//import * as React from 'react';
import React, { ReactElement, useState, useEffect } from 'react';
import FCounterDisplay from './FCounterDisplay';
//디폴트로 설정되지 않은 함수를 불러올때 {} 사용
import {useCounter} from './hooks/useCounter'
import useToggle from './hooks/useToggle'
import useWindowWidth from './hooks/useWindowWidth';

interface CounterProps {
    title: string,
    num: number,
}
//클래스를 함수로 변경
//function FCounter(props:CounterProps):ReactElement {
//화살표 함수 형식으로 간단하게 수정
//const FCounter=(props:CounterProps)=>{
const FCounter:React.FC<CounterProps>=(props)=>{
    // const[counter, setCounter]=useState(0); useCounter로 이동
    //const[hideCount, setHideCount]=useState(false);
    //useCounter로 부터 변수1개, 함수 2개를 받는다.
    //useCounter에서 return을 중괄호로 보내서 중괄호로 받는다
    const {count, plus, minus} = useCounter();
    //useToggle에서 return을 대괄호로 보내서 대괄호로 받는다
    const [hide, toggle] = useToggle();
    const {width, cleanup} = useWindowWidth();

    //const plus = ()=>{setCounter(counter+1)}  useCounter로 이동
    //const minus = ()=>{setCounter(counter-1)}  useCounter로 이동
    //const toggle = ()=>{setHideCount(!hideCount)} useToggle로 이동
    useEffect(()=>{
        console.log("[Rendered] Counter/useEffect")
    })
    useEffect(()=>{
        console.log("[Rendered] Counter/useEffect")
    })
    return(
        <div>
            <h1>{props.title}{props.num}</h1>
            <h3>Count: {count}</h3>
                {!hide && <FCounterDisplay counter = {count} />}
                {/* 조건부렌더링 this.state.hideCount 이 조건이 false일때만 <CounterDisplay>를 렌더닝*/}
            <button onClick={plus}>Plus</button>
            <button onClick={minus}>Minus</button>
            <button onClick={toggle}>Toggle Count</button>
            <button onClick={cleanup}>Clean</button>

            <h4>width: {width}</h4>
        </div>
        )
    }
    

export default FCounter;