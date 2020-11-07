import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectGrid, createNewArray } from '../grid/gridSlice';
import { selectScore, resetValue } from '../score/scoreSlice';

export default function Gameover() {
  const dispatch = useDispatch();
  const [con, setCon] = useState(0);
  const array = useSelector(selectGrid);
  const score = useSelector(selectScore);

  const calculateIfGameOver = (array) => {
    let connections = 0;
    for (let row = 0; row < 5; row++) {
      for (let col = 0; col < 5; col++) {
        if (row + 1 < 5 ? array[row][col] === array[row + 1][col] : false)
          connections++;
        if (row - 1 > -1 ? array[row][col] === array[row - 1][col] : false)
          connections++;
        if (col + 1 < 5 ? array[row][col] === array[row][col + 1] : false)
          connections++;
        if (col - 1 > -1 ? array[row][col] === array[row][col - 1] : false)
          connections++;
      }
    }
    setCon(connections);
  };

  const handleClick = () => {
    dispatch(resetValue());
    dispatch(createNewArray());
  };

  useEffect(() => {
    calculateIfGameOver(array);
  }, [array]);

  return (
    <div
      className={!con && score !== 0 ? 'gameover-panel' : 'gameover-panel-hide'}
    >
      {!con && score !== 0 && (
        <h1 className="gameover-h">
          Game over
          <br />
          Your score: {score}
        </h1>
      )}
      <button className="play-again-btn" onClick={handleClick}>
        Play Again!
      </button>
    </div>
  );
}
