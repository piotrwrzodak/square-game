import React from 'react';
import { useSelector } from 'react-redux';
import { selectScore } from '../store/slices/scoreSlice';

export default function Score() {
  const score = useSelector(selectScore);
  return <h1>{score}</h1>;
}
