import * as React from 'react';
interface State{
    count: number;
}
//reducer의 변수 action의 타입을 지정해주기 위해서 타입알리아스 작성
//타입을 그냥 any로 해도 되지만 좀더 명확하게 표시하기 위해서 작성
//당연히 그냥 인터페이스로 작성해줘도 됨
type Action = {type: 'increment'}|{type:'decrement'};
const reducer = (state:State, action:Action):State=>{
    //action으로 전달된 type값에 따라 실행내용 달라짐
    switch(action.type){
        case 'increment':
            return {count: state.count +1}
        case 'decrement':
            return {count: state.count -1}
        default: 
            throw new Error();
    }
}
const App1 = ()=>{
    //const [count,setCount] = React.useState(0);
    //reducer사용하기 준비
    //state를 dispatch라는 이름으로 조건부 함수 실행
    const [state, dispatch] = React.useReducer(reducer,{count:0});
    //action을 호출하기 위한  dispatch:여러가지 복잡한 선택에 따라 조건부로 실행
    //action에게 dispatch를 통해 increment를 전달한다. 
    const increment = ()=>dispatch({type:'increment'});
    const decrement = ()=>dispatch({type:'decrement'});

    return(
    <div>
        <p>Count : {state.count}</p>
        <button onClick={increment}>증가</button>
        <button onClick={decrement}>감소</button>
    </div>
    );
}
export default App1;