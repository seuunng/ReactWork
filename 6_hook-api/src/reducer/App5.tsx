import * as React from 'react';
interface Action {

}
interface Member{
    id:string;
    name: string;
    age: number;
    address: string;
}
const reducer = (state: any, action: any)=>{
    switch (action.type){
        case 'ADD':
            return '';
        default:
            return state;
    }
    return state;
}

const App5:React.FC = ()=>{
    //리듀서 초기화
    //여기서 필요한 데이터를 정의한다. 전체회원수와 회원의 3가지정보를 포함한 배열
    const [state, dispatch] = React.useReducer(reducer, {count:0, member:[]});
    const [info, setInfo] = React.useState<Member>();
    const addMember = ()=>{
        console.log(info)
        //디스패처에게 요청사항을 작성
        dispatch({type:"ADD", info: info})
        
    }
    const onChangeHandler = (e:any)=>{
        setInfo(e.target.value)
    }
    return(
        <div>
            <div>
                <h1>전체 회원 수 :</h1>
                <div>
                    {/* autoComplete='off': 자동완성 기능 해제 */}
                    이름 : <input   type={'text'} 
                                    name="name" 
                                    autoComplete='off' 
                                    onChange={onChangeHandler}/>
                </div>
                <div>
                    나이 : <input   type={'number'} 
                                    name="age"
                                    autoComplete='off' 
                                    onChange={onChangeHandler}/>
                </div>
                <div>
                    주소 : <input   type={'text'} 
                                    name="address"
                                    autoComplete='off' 
                                    onChange={onChangeHandler}/>
                </div>
                <button onClick={addMember}>추가</button>
            </div>
            <table>
                <tr>
                    <th>이름</th><th>나이</th><th>주소</th><th>삭제</th>
                </tr>
            </table>
        </div>
    );
}



export default App5;
