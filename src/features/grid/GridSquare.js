import React from 'react'
import GridSearch from './gridSearch';


export default function GridSquare(props) {
  const classes = `grid-square color-${props.color}`

  const handleClick = () => {
    let squaresToDelete = GridSearch(props.id.toString().charAt(0), props.id.toString().charAt(1), props.array)
    console.log(squaresToDelete)
  }


  return <div className={classes} onClick={handleClick}/>
}