import React, {useState} from 'react'
import Square from './Square'
import './Board.css'
//1. 중복으로 선택 안되게 하기 2. 게임이 끝나면 선택안되게 하기

//클래스+생성자를 함수 +useState로 변경
const Board = ()=>{
    const [squares, setSquares] = useState(Array(9).fill(null));
    const [xIsNext, setIsnext] = useState(true);

    const calculateWinner = (Squares) => {
        const lines = [
            [0,1,2], [3,4,5], [6,7,8],
            [0,3,6], [1,4,7], [2,5,8],
            [0,4,8], [2,4,6],
        ]
        //위 배열에 따라 반복을 돌려서 세개값이 모두 O거나 X면 빙고!로 저장
        for(let index=0; index<lines.length; index++){
            const [a, b, c] = lines[index];
            if(squares[a] === squares[b] && squares[c] === squares[b]){
                return squares[a];
            }

        }
    }
    //winner가 생기면 위너를 알려주고 빙고라고 외친다.
    const winner = calculateWinner(squares);
    let status;
    let isWinningSquare = false;
    if(winner){
        status = 'Winner : '+ winner;
        alert("Bingo!")
    }else{
        //플레이어 순서에 따라 ox표시해서 누구차례인지 알려줌
        status = `Next Player : ${ xIsNext?'X':'O'}`;
        
    }
    
    //번걸아가면서 돌을 표시할수 있음 차례가 토글로 바뀜
    const handleClick = (i)=>{
        const newSquares = squares.slice();
        if(winner!=null||newSquares[i]!=null){
            return;
        }
        newSquares[i] = xIsNext?'X':'O';
        setSquares(newSquares);
        setIsnext(!xIsNext);
    }
    const renderSquare=(i)=>{
        return <Square value={squares[i]}
                onClick={()=>{handleClick(i)}}/>
    }
    return(
         //jxs에서는 단하나의 루트 태그가 반드시 있어야 함
        <div>
            <div className='status'>{status}</div>
            <div>
                {renderSquare(0)}
                {renderSquare(1)}
                {renderSquare(2)}
            </div>
            <div>
                {renderSquare(3)}
                {renderSquare(4)}
                {renderSquare(5)}
            </div>
            <div>
                {renderSquare(6)}
                {renderSquare(7)}
                {renderSquare(8)}
            </div>
        </div>
    )
    
    
}
export default Board;