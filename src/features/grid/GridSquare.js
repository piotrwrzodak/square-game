import React from 'react'
import { useDispatch } from 'react-redux';
import { deleteSelected, lowerTheRest } from './gridSlice';
import { incrementByAmount } from '../score/scoreSlice';
import GridSearch from './gridSearch';


export default function GridSquare(props) {
  const dispatch = useDispatch(); 
  const classes = `grid-square color-${props.color}`

  const handleClick = () => {
    let squaresToDelete = GridSearch(props.id.toString().charAt(0), props.id.toString().charAt(1), props.array)
    console.log(squaresToDelete)
    dispatch(deleteSelected(squaresToDelete));
    dispatch(incrementByAmount(squaresToDelete.length))
    dispatch(lowerTheRest(squaresToDelete));
  }


  return <div className={classes} onClick={handleClick}/>
}