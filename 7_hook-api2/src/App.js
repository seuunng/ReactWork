import * as React from "react";
interface Member {
  id: string;
  name: string;
  age: number;
  address: string;
}
//중복되지 않는 값이 리턴되는 함수
const uid = () => {
  let a = new Uint32Array(3);
  window.crypto.getRandomValues(a);
  return (
    performance.now().toString(36) +
    Array.from(a)
      .map((A) => A.toString(36))
      .join("")
  ).replace(/\./g, "");
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return {
        ...state,
        count : state.count + 1,
        member : [...state.member, {...action.info}]
        //한번만 입력하고 끝나는게 아니라 계속 입력할꺼라서 ...연산자 사용
      };
    case "DEL":
      return {
        ...state,
        count : state.count - 1,
        member : state.member.filter((mem) => mem.id !== action.idx)
      };
    default:
      return state;
  }
  return state;
};

const App = () => {
  //리듀서 초기화
  //여기서 필요한 데이터를 정의한다. 전체회원수와 회원의 3가지정보를 포함한 배열
  const [state, dispatch] = React.useReducer(reducer, { count: 0, member: [] });
  const [info, setInfo] = React.useState({});
  //추가 버튼을 클릭할때 마다 함수 호출
  //onChangeHandler()에서 저장된 info를 리듀서로 전달+ADD를 실행해줘
  const addMember = (e) => {
    //디스패처에게 요청사항을 작성
    dispatch({ type: "ADD", info: info });
    
  };
  //입력필드가 변할때 마다 함수 호출
  //입력된 내용이 필드명: 밸류값 형태로 저장됨->info
  const onChangeHandler = (e) => {
    setInfo({...info, id: uid(), [e.target.name]: e.target.value });
    //setInfo({...info,  [e.target.name]: e.target.value });
  };
  const delMember = (e) => {
    //디스패처에게 요청사항을 작성
    dispatch({ type: "DEL", idx: e.target.value});
    //console.log([e.target.value])
  }
  return (
    <div>
      <div>
        <h1>전체 회원 수 :{state.count}</h1>
        <div>
          {/* autoComplete='off': 자동완성 기능 해제 */}
          이름 :{" "}
          <input
            type={"text"}
            name="name"
            autoComplete="off"
            onChange={onChangeHandler}
          />
        </div>
        <div>
          나이 :{" "}
          <input
            type={"number"}
            name="age"
            autoComplete="off"
            onChange={onChangeHandler}
          />
        </div>
        <div>
          주소 :{" "}
          <input
            type={"text"}
            name="address"
            autoComplete="off"
            onChange={onChangeHandler}
          />
        </div>
        <button onClick={addMember}>추가</button>
      </div>
      <table>
        <tr>
          <th>아이디</th>
          <th>이름</th>
          <th>나이</th>
          <th>주소</th>
          <th>삭제</th>
        </tr>
        {
          //값을 하나만 리턴할때는 화살표 함수를 ()=>()로 사용(중괄호가 아니라 소괄호)
          state.member.map((mem)=>(
            <tr>
              <td>{mem.id}</td>
              <td>{mem.name}</td>
              <td>{mem.age}</td>
              <td>{mem.address}</td>
              <td><button onClick={delMember} value={mem.id}>삭제</button></td>
            </tr>
          ))
        }
      </table>
    </div>
  );
};

export default App;

