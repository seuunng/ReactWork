import React from 'react'
import './Square.css'

const square = ({onClick, value, isWinningSquare }) => {

    return(
        <button className={`square ${isWinningSquare ? 'winnner' : ''}`} 
                onClick={onClick}>
            {value}
        </button>
    )
    
}
export default square;