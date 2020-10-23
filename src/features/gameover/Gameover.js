import React, {useState, useEffect} from 'react'
import { useSelector  } from 'react-redux';
import { selectGrid } from '../grid/gridSlice';
import { selectScore } from '../score/scoreSlice';

export default function Gameover() {
    // set to one to load nicely
    const [con, setCon] = useState(0)
    const array = useSelector(selectGrid)
    const score = useSelector(selectScore)


    const calculateIfGameOver = (array) => {
        let connections = 0
        for (let row = 0; row < 5; row++) {
            for (let col = 0; col < 5; col++) {
                if (row + 1 < 5 ? array[row][col] === array[row + 1][col] : false) connections++;
                if (row - 1 > -1 ? array[row][col] === array[row - 1][col] : false) connections++;
                if (col + 1 < 5 ? array[row][col] === array[row][col + 1] : false) connections++;
                if (col - 1 > -1 ? array[row][col] === array[row][col - 1] : false) connections++;
            }
        }
        setCon(connections)
    }

    useEffect(() => {
        calculateIfGameOver(array);
    }, [array])

    return (
        <div className={!con && score !== 0 ? "gameover-panel" : "gameover-panel-hide"}>
            {!con && score !== 0 && <h1 className="gameover-h">Game over<br/>Your score: {score}</h1>}
        </div>
    )
}

