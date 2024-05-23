import * as React from 'react';

const bankReducer = (total:number, action: { type: string, value?: number })=>{
    switch(action.type){
        case 'input':
            return total+(action.value || 0);
        case 'output':
            return total-(action.value || 0);
        default: 
            return total;
    }
}
const App3:React.FC = ()=>{
    const [total, bankDispatcher] = React.useReducer(bankReducer, 0);
    const [value, setValue] = React.useState<number>(0);
    
    const input = ()=>{bankDispatcher({type:'input', value: value})};
    const output = ()=>{bankDispatcher({type:'output', value: value})};
    return(
        <div>
            <h1>금액을 입력하세요</h1>
            <input type="number" value={value} onChange={(e)=>{setValue(Number(e.target.value))}}></input>
            <hr></hr>
            <h2>입금 또는 출금을 선택하세요</h2>
            <button onClick={input}>입금</button>
            <button onClick={output}>출금</button>
            <h2>현재 잔액: {total}</h2>
        </div>
    );
}
export default App3;