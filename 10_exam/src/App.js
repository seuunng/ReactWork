import React, {useState} from 'react';


const info={
  id: "park",
  pw: "0000",

};

function App() {
  const [input_id, setId] = useState('');
  const [input_pw, setPw] = useState('');
  
  const infoHandler = ()=>{
      if(info.id===input_id && info.pw===input_pw){
        alert('로그인 성공');
      }else{
        alert('아이디 혹은 비밀번호를 확인해주세요');
  }
}
  return (
    <div className="App">
      ID: <ID value={input_id?input_id:''} onChange={(e1)=>setId(e1.target.value)}></ID>
      PW: <PW value={input_pw?input_pw:''} onChange={(e2)=>setPw(e2.target.value)}></PW>
      <button onClick={infoHandler}>Login</button>
    

    </div>
  );


}

const ID = ({value, onChange}) => {
  
    return (
      <span>
        <input type="text" value={value} onChange={onChange}></input><br></br>
      </span>
    )
};
const PW = ({value, onChange}) => {
  
  return (
    <span>
      <input  type="password" value={value} onChange={onChange}></input><br></br>
    </span>
  )
};

export default App;
