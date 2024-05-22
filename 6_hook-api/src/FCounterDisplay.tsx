import * as React from 'react';
interface CounterDisplayProps {
    counter : number,
}

function FCounterDisplay(props: CounterDisplayProps){
    

        return (<h3>CounterDisplay: {props.counter}</h3>)
    }
    
export default FCounterDisplay; //다른페이지에서 가져다 쓸수 있도록 내보냄