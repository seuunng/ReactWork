import * as React from 'react';

const priceReducer = (price:number, action:any)=>{
    //action으로 전달된 type값에 따라 실행내용 달라짐
    switch(action.type){
        case 'hambuger':
            return price+4000;
        case 'potato':
            return price+3000;
        case 'coke':
            return price+1000;
        case 'reset':
            return price=0;
        default: 
            return price;
    }
}
const App2:React.FC = ()=>{
    const [price, priceDispatcher] =
    React.useReducer(priceReducer, 0);
    
    const onHambuger = ()=>{priceDispatcher({type:'hambuger'})};
    const onPotato = ()=>{priceDispatcher({type:'potato'})};
    const onCoke = ()=>{priceDispatcher({type:'coke'})};
    const onReset = ()=>{priceDispatcher({type:'reset'})};
    return(
    <div>
        <h1>햄버거 가게</h1>
        <h3>지불할 금액: {price}</h3>
        <hr></hr>
        <button onClick={onHambuger}>햄버거 (4000원)</button>
        <button onClick={onPotato}>감자튀김 (3000원)</button>
        <button onClick={onCoke}>콜라 (1000원)</button>
        <br></br><br></br>
        <button>주문</button>
        <button onClick={onReset}>취소</button>
    </div>
    );
}
export default App2;