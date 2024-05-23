import * as React from 'react';
interface useCounterReturnType {
    count: number,
    plus : ()=>void; //void 로 설정하면 리턴없어도 됨, 중괄호 생략 가능
    minus : ()=>void;
}
//다른 페이지에서 쓸수 있도록   export를 붙인다.
export function useCounter():useCounterReturnType {
    const[count, setCount]=React.useState(0);
    //const plus = ()=>{setCount(count+1)};
    //const minus = ()=>{setCount(count-1)};
    const plus =  React.useCallback(()=>setCount((prev)=>prev+1),[]);
    const minus = ()=>{setCount((prev)=>prev-1)};
    //useCallback으로 묶어도 기능은 똑같음
    //useCallback: 리턴하는 값은 함수 자체이다. 이것을 Memoization한다.
    // 이미 계산된 값이 있으면 계산된 값을 반환,불필요한 렌더링 진행되지 않게 한다.
    return{
        count,
        plus,
        minus
    };
}