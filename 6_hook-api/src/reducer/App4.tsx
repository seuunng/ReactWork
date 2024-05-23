import * as React from 'react';
//데이터 구조 정의
interface Item {
    name : string;
    price : number;
}
interface State {
    items: Item[];
    total: number;
    [key:string] : any; // 각 물건에 대한 체크 여부, 값이 없으면 빈 배열로 처리
}
interface Action {
    type:string;
    payload: string;
}
interface CheckBoxProps {
    name : string;
    price : number;
    isChecked: boolean;
    onChange:()=>void;
}
//초기 상태 정의
const initialState:State={
    items:[
        {name:"cap", price:10},
        {name:"shoes", price:30},
        {name:"bag", price:50},
    ],
    total:0
}
//리듀서 함수정의: 상태(state)를 업데이트하는 역할
//Action함수에 type이 정의되어 있어서 action.type을 사용할 수 있음
const reducer = (state:State, action:Action):State=>{
    switch(action.type){
        case "TOGGLE_ITEM":
            //타입스크립트는 null일지 아닐지 확실히 해줘야 함.
            //!이것은 절대로 null이아니라고 보장하는 연산자
            const selectedItem = state.items.find((item)=>item.name === action.payload)!;
            //화살표 함수에서 값을 명시적으로 반환: return을 안쓰면 중괄호 생략!!
            const isItemChecked = state[action.payload];

            return {
                ...state,
                //...전개 연산자: state의 모든 기존 값을 포함
                total:isItemChecked? state.total - selectedItem.price : state.total + selectedItem.price,
                [action.payload] : !isItemChecked
                // 토탈결정후 해지될수있게
            };
        default:
            return state;
    }
    return state;
}

// 체크박스를 클릭하면  onChange()함수 실행
// onChange()함수는 changeHandler(item.name)을 실행
// changeHandler(item.name)는 type: "TOGGLE_ITEM", payload :itemName 를 리듀서에 전달
// 리듀서는  (state:State, action:Action)를 파라미터로 받는데,
// type: "TOGGLE_ITEM",은 Action의 속성이고 ;TOGGLE_ITEM은 여기서는 리듀서로 넘어가는 타입값이 하나라서 별 의미는 없다.
// 일반적으로 아이템 이름자체를 타입으로 넘기지는 않음 가독성과 관례적으로.. 타입이 하나라도 타입값을 별도로 넘기는 것으로 함 
// payload는 함께 전달되는 데이터 payload는 itemName으로 onChange()가 실행되면서 넘어간 item.name을 의미
// reducer는 (state:State, action:Action)을 파라미터로 받늗다.
// state(현재상태)는  items: Item[];  total: number;  [key:string] :
// Action(상태를 변경하기 위한 액션 객체)은 type:string;  payload: string;
//(state: State, action: Action)의 타입이 다시 : State로 정의 되는 것은 
// items: Item[];  total: number;  [key:string] :값과 type:string;  payload: string;을 매개변수로 받고
// 리듀서 함수를 실행하여 반환을 items: Item[];  total: number;  [key:string] 이렇게 해줘야 함을 의미한다.
// 리듀스 함수는 action.type에 따라서 다른 동작을 한다.
// case "TOGGLE_ITEM":인 경우  
// state.items 배열을  find() 검색해서 item.name중에서 action.payload을 찾아서 selectedItem을 정의한다.
// state[action.payload]의 값을 isItemChecked로 저장한다. 이 값은 항목이 체크되어 있는지를 나타냅니다.
// 그리고 지금까지의 state값을 Item[]으로 반환, total을 isItemChecked가 트루이면 빼고 팔스이면 더한 값으로 반환
// (배열돌려서 찾은 같은 이름selectedItem을 기준으로 해당 이름의 price를 찾아서)
// isItemChecked의 체크값을 반전시킨다.

//컴포넌트 정의
//전체 애플리케이션을 렌더링
const App4:React.FC = ()=>{
    //useReducer 훅을 사용하여 상태와 디스패치를 초기화
    const [state, dispatch] =
    React.useReducer(reducer, initialState);
    //changeHandler 함수는 항목의 이름을 받아서 TOGGLE_ITEM 액션을 디스패치
    //changeHandler 함수는 각 체크박스가 클릭되었을때 호출되어 상태를 업데이트 하는 역할을 한다.
    //changeHandler가  체크박스 클릭될때마다 체크여부값을 아이템 이름에 전달됨
    const changeHandler = (itemName : string)=>{
        dispatch({type: "TOGGLE_ITEM", payload :itemName})
    }
    //const input = ()=>{bankDispatcher({type:'input'})};
    return(
        <div>
            <h1>Total: {state.total}</h1>
            {/* state.items 배열을 map 함수로 순회하면서 Checkbox 컴포넌트를 렌더링 */}
            {state.items.map((item: Item, index: number) => {
                return (
                    <Checkbox 
                        key={index}
                        name={item.name} 
                        price={item.price} 
                        isChecked={!!state[item.name]} 
                        //!! 연산자는 해당 값이 존재하면 true, 존재하지 않으면 false로 변환합니다.
                        //!! 연산자는 해당 값이 존재하면 true, 존재하지 않으면 false로 변환합니다.
                        onChange={() => changeHandler(item.name)} 
                    />
                );
            })}
        </div>
    );
}



//개별 항목의 체크박스를 렌더링  

//Checkbox 컴포넌트는 개별 항목의 체크박스를 렌더링하는 역할
//렌더링: 데이터나 코드를 시각적인 요소로 변환하는 과정

const Checkbox:React.FC<CheckBoxProps>=({name, price, isChecked, onChange})=>{
    return(
        <div>
            <label>
                <input type="checkbox"checked={isChecked} onChange={onChange}/>
                    {name}, {price}
            </label>
        </div>
    );
}

export default App4;


// 과제: 라디오 버튼의 value를 출력 
//드롭다운 으로 지역선택 확인누르면 선택한 값이 alert로 나오계!