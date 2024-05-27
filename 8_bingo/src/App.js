import './App.css';
import Board from './components/Board';
import React, {useState} from 'react'

function App() {
  //한 수 둘때마다 빙고판이 하나씩 추가됨
  // history: 빙고판 저장 기록
  const [history, setHistory] = useState([{squares: Array(9).fill(null)}]);
  // xIsNext: 다음 사람 있는지?
  const [xIsNext, setXIsnext] = useState(true);
  // stepNumber: 게임진행 순서 연번
  const [stepNumber, setStepNumber] = useState(0);

  // 승리자가 있는지 계산하는 함수
  const calculateWinner = (squares) => {
    const lines = [ //승리의 조건배열
        [0,1,2], [3,4,5], [6,7,8],
        [0,3,6], [1,4,7], [2,5,8],
        [0,4,8], [2,4,6],
    ]
    //위 승리의 조건 배열에 따라 반복을 돌려서 세개값이 모두 O거나 X면 빙고!로 저장
    for(let index=0; index<lines.length; index++){
        const [a, b, c] = lines[index];
        //null값여부를 먼저 확인을 해야한다??
        //: squares[a]에 실제로 값이 들어있는지 확인
        //: 즉, 해당 칸이 빈 칸이 아닌지 확인합니다.
        if(squares[a] && squares[a] === squares[b] && squares[c] === squares[b]){
            return squares[a];
        }
    }
    return null;
  }
  
  //winner가 생기면 위너를 알려주고 빙고라고 외친다.
  //현재위치: 제일 마지막 빙고판
  //const current = history[history.length-1] 
  //현재위치: 이전 버튼이 있기 떄문에  step넘버로 구분
  const current = history[stepNumber]
  // 승리자: 승리자가 있는지 계산하는 함수에 현재 빙고판 상태 넣을때 값이 있는지, 
  // 승리자가 없다면 null이 리턴되기 때문에
  const winner = calculateWinner(current.squares);
  let status;
  //승리자가 있으면 status값을 저장 AND alert실행
  if(winner){
      status = 'Winner : '+ winner;
      alert("Bingo!")
  }else{
      //승리자가 아직 없다면 status값에 다른 플레이어를 저장
      //플레이어 순서에 따라 ox표시해서 누구차례인지 알려줌
      status = `Next Player : ${ xIsNext?'X':'O'}`;    
  }
  //클릭할때마다 플레이어를 바꿔주는 함수
  //번걸아가면서 돌을 표시할수 있음 차례가 토글로 바뀜
  const handleClick = (i)=>{
    //새로운 빙고판?
    //history는 이전 모든 상태를 저장하는 배열
    //stepNumber는 현재 게임의 단계(턴)를 나타내는 상태
    //slice 메서드는 배열의 일부분을 복사하여 새로운 배열
    //history.slice(0, stepNumber + 1)은 history 배열의 처음부터 stepNumber + 1까지의 요소를 복사
    //현재 단계까지의 모든 상태를 포함한 새로운 히스토리를 생성
    const newHistory = history.slice(0, stepNumber+1);
    //그래서 현재단계는 새로운 히스토리 배열에서 가장 최근의 상태(현재 상태)를 가져옴
    //newHistory[newHistory.length-1] : 새로운 히스토리 배열의 가장 최근 상태
    const newCurrent = newHistory[newHistory.length-1]
    //현재 게임 보드 상태인 newCurrent.squares 배열을 복사하여 newSquares 배열을 생성
    //이렇게 함으로써 원래 newCurrent.squares 배열은 변경되지 않고, 불변성을 유지
    const newSquares = newCurrent.squares.slice();
    //승리자가 정해졌거나 이미 스퀘어 값이 존재한다면 클릭해도 아무것도 반환하지 않습니다.
    if(winner!=null||newSquares[i]!=null){
        return;
    }
    //현재 네모칸에 xIsNext값이 T이면 x를 F이면 O를 입력
    //xIsNext값은 함수가 실행될때마다 반잔되지 때문에 사용자가 한턴씩 입력할수있게 된다.
    newSquares[i] = xIsNext?'X':'O';
    //스프레드 연산자(...)를 사용하여 기존 히스토리를 펼친 후, 새로운 상태를 추가
    setHistory([...newHistory, {squares: newSquares}]);
    //xIsNext값을 반전시킴
    setXIsnext(prev=>!prev);
    //setStepNumber에 newHistory배열을 입력
    setStepNumber(newHistory.length)
}
  //history는 각 단계별로 게임 보드 상태를 저장한 배열
  //map 메서드는 배열의 각 요소에 대해 함수를 호출하여 새로운 배열
  //여기서는 각 단계별로 버튼을 생성하는 데 사용
  const moves = history.map((step, move)=>{
    //desc는 버튼에 표시될 텍스트를 저장
    const desc = move?'Go to move #' + move: 'Go to game start';
    //jumpTo는 React 애플리케이션에서 특정 단계로 이동하는 기능
    //만들어진 버튼을 클릭하면 해당 빙고판으로 돌아감
    const jumpTo = (step)=>{
      //입력받은 매개변수로 StepNumber를 세팅
      setStepNumber(step);
      //돌아가는 빙고판에서 어떤 플레이어 차례인지 다시 세팅
      //X가 번저 시작하니까 X는 짝수 O는 홀수
      //2로 나눠서 0이나오면 짝수니까, X차례로 세팅
      setXIsnext((step%2)===0);
    }
    return(
      <li key={move}>
        <button className='move-button' onClick={()=>jumpTo()}>{desc}</button>
      </li>
    )
  });

  return (
    <div className="game">
      <div className="game-board" >
        <Board squares={current.squares} onClick={(i)=>handleClick(i)}/>
      </div>
      <div className="game-info">
        <div>{status}</div>
        <ol>{moves}</ol>
      </div>
    </div>
  );
}

export default App;
