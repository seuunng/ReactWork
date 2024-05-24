import React, {Component} from 'react'
import Square from './Square'
import './Board.css'

//클래스형
export default class Board extends Component{
    constructor(){
        super();
        this.state = { squares : Array(9).fill(null)}
    }
    handleClick = (i)=>{
        const square = this.state.squares.slice();
        square[i] = 'X';
        this.setState({ square : square})
    }
    renderSquare(i){
        return <Square value={this.state.squares[i]}
                onClick={()=>{this.handleClick(i)}}/>
    }
    //화면에 그려지는 역할을 하는 render함수
    render() {
        return(
            //jxs에서는 단하나의 루트 태그가 반드시 있어야 함
            <div>
                <div className='status'>Next Player: X, O</div>
                <div>
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div>
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div>
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        )
    };
}