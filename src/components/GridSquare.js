import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteSelected, lowerTheRest } from '../store/slices/gridSlice';
import { incrementByAmount } from '../store/slices/scoreSlice';
import { gridSearch } from '../utils/gridSearch';

export default function GridSquare(props) {
  const dispatch = useDispatch();
  const classes = `grid-square color-${props.color}`;

  const handleClick = () => {
    let squaresToDelete = gridSearch(
      props.id.toString().charAt(0),
      props.id.toString().charAt(1),
      props.array
    );
    dispatch(deleteSelected(squaresToDelete));
    dispatch(incrementByAmount(squaresToDelete.length));
    dispatch(lowerTheRest(squaresToDelete));
  };

  return <div className={classes} onClick={handleClick} />;
}
