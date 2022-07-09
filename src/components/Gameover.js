import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createNewArray, selectGrid } from '../store/slices/gridSlice';
import { resetValue, selectScore } from '../store/slices/scoreSlice';

export default function Gameover() {
  const dispatch = useDispatch();
  const array = useSelector(selectGrid);
  const score = useSelector(selectScore);
  const [possibleMove, setPossibleMove] = useState(true);

  const calculateIfGameOver = (array) => {
    for (let row = 0; row < 5; row++) {
      for (let col = 0; col < 5; col++) {
        if (row + 1 < 5 ? array[row][col] === array[row + 1][col] : false)
          return true;
        if (row - 1 > -1 ? array[row][col] === array[row - 1][col] : false)
          return true;
        if (col + 1 < 5 ? array[row][col] === array[row][col + 1] : false)
          return true;
        if (col - 1 > -1 ? array[row][col] === array[row][col - 1] : false)
          return true;
      }
    }
    return false;
  };

  const handleClick = () => {
    dispatch(resetValue());
    dispatch(createNewArray());
  };

  useEffect(() => {
    setPossibleMove(calculateIfGameOver(array));
  }, [array]);

  return (
    <div
      className={
        !possibleMove && score !== 0 ? 'gameover-panel' : 'gameover-panel-hide'
      }
    >
      {!possibleMove && score !== 0 && (
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
