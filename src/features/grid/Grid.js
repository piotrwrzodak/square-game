import React from 'react';
import Gridsquare from './GridSquare';
import { useSelector } from 'react-redux';
import { selectGrid } from './gridSlice';


export default function Grid() {
    const array = useSelector(selectGrid);

    const grid = [] 
    for (let row = 0; row < 5; row ++) {
        grid.push([])
        for (let col = 0; col < 5; col ++) {
            grid[row].push(<Gridsquare key={`${row}${col}`} color={array[row][col]} id={`${row}${col}`} />)
        }
    }

    return (
        <div className="grid-wrap">
            <div className='grid-board'>
                {grid}
            </div>
        </div>
    )
}
