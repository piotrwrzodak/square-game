import React from 'react';
import { useSelector } from 'react-redux';
import { selectGrid } from '../store/slices/gridSlice';

export default function Grid() {
  const array = useSelector(selectGrid);
  console.log(array);

  const handleClick = (rowId: number, colId: number) => {
    console.log('click', rowId, colId);
    // const squaresToDelete = gridSearch(
    //   props.position.row,
    //   props.position.col,
    //   props.array
    // );
    // dispatch(deleteSelected(squaresToDelete));
    // dispatch(incrementByAmount(squaresToDelete.length));
    // dispatch(lowerTheRest(squaresToDelete));
  };

  return (
    <div className="grid-wrap">
      <div className="grid-board">
        {array.map((row, rowId) =>
          row.map((value, colId) => (
            <div
              key={`${rowId}${colId}`}
              className={`grid-square color-${value}`}
              onClick={() => handleClick(rowId, colId)}
            />
          ))
        )}
      </div>
    </div>
  );
}
