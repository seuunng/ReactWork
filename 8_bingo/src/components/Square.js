import React from 'react'
import './Square.css'

const square = ({onClick, value, isWinningSquare }) => {

    return(
        <button onClick={onClick}>
            {value}
        </button>
    )
    
}
export default square;