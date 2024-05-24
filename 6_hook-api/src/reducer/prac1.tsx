import * as React from 'react';

const Reducer = (state: string, action: { type: string; value?: string }):string=>{
    switch(action.type){
        case 'select':
            return '';
        default: 
            return state;
    }
}

const prac1:React.FC = ()=>{
    const [result, Dispatcher] = React.useReducer(Reducer, '');
    const [value, setValue] = React.useState<string>('');
    const select =()=>{
        Dispatcher({type:'select', value: value});
        alert(value);
    }
    return(
        <div>
            <h1>라디오 버튼의 value를 출력</h1> 
            <select value={value} onChange={(e)=>setValue(e.target.value)}>
                <option>선택하세요</option>
                <option>서울</option>
                <option>경기</option>
                <option>강원</option>
            </select>
            <button onClick={select}>확인</button>
        </div>
        );
}
export default prac1;


// 과제: 라디오 버튼의 value를 출력 
//드롭다운 으로 지역선택 확인누르면 선택한 값이 alert로 나오계!